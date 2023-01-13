import { EmojiEvents, Person, School } from '@mui/icons-material';
import React from 'react';
import Style from "./offer.module.scss"

function Offer(props) {
    return (
        <div className={Style.offer}>
            <div className={Style.text_column}>
                <h4 className='display-6 mb-1 w-20 text-primary'>WHAT WE GIVE</h4>
                <h2 className='display-4 mb-2 w-20'>What do you get from us</h2>
                <dd >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie</dd>
            </div>
            <div className={Style.row_section}>
                <div className={Style.item+ ' card wow fadeUp'}>
                    <span className={Style.icon}><Person fontSize='large' /></span>
                    <span className={Style.heading}>Professional Teacher</span>
                    <dd className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</dd>
                </div>
                <div className={Style.item + ' card wow fadeUp'}>
                    <span className={Style.icon}><School fontSize='large' /></span>
                    <span className={Style.heading}>Course Certificate</span>
                    <dd className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</dd>
                </div>
                <div className={Style.item + ' card wow fadeUp'}>
                    <span className={Style.icon}><EmojiEvents fontSize='large' /></span>
                    <span className={Style.heading}>Interesting Learning</span>
                    <dd className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</dd>
                </div>
            </div>
        </div>
    );
}

export default Offer;