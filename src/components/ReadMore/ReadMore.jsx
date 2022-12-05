import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charLimit: props.charLimit
    };
    this.initialState = this.state;
  }

  getReadMoreContent() {
    const { charLimit } = this.state;
    const { readMoreText, readLessText, text } = this.props;
    if (text.length > charLimit) {
      return (
        <span className='short-text'>
          <span
            dangerouslySetInnerHTML={{ __html: text.substr(0, charLimit) }}
          />

          <span
            className='readMoreText'
            style={{ color: 'blue', cursor: 'pointer' }}
            role='presentation'
            onClick={this.showLongText.bind(this)}
          >
            {readMoreText}
          </span>
        </span>
      );
    } else if (text.length < charLimit) {
      return <span className='short-text'>{text}</span>;
    }
    return (
      <span className='short-text'>
        <span dangerouslySetInnerHTML={{ __html: text }} />

        <span
          className='readMoreText'
          style={{ color: 'blue', cursor: 'pointer' }}
          role='presentation'
          onClick={this.showShortText.bind(this)}
        >
          {readLessText}
        </span>
      </span>
    );
  }

  showLongText() {
    const { text } = this.props;
    this.setState({ charLimit: text.length });
    this.getReadMoreContent();
  }

  showShortText() {
    this.setState(this.initialState);
    this.getReadMoreContent();
  }

  render() {
    return <div>{this.getReadMoreContent()}</div>;
  }
}

ReadMore.propTypes = {
  charLimit: PropTypes.number,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string,
  text: PropTypes.string.isRequired
};
ReadMore.defaultProps = {
  charLimit: 150,
  readMoreText: 'Read more',
  readLessText: 'Read less'
};

export default ReadMore;