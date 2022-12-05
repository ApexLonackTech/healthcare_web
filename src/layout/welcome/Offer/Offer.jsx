import { EmojiEvents, Person, School } from '@mui/icons-material';
import React from 'react';
import Style from "./offer.module.scss"

function Offer(props) {
    return (
        <div className={Style.offer}>
            <div className={Style.text_column}>
                <h4 className={Style.title}>WHAT WE GIVE</h4>
                <h2 className={Style.sub_title}>What do you get from us</h2>
                <span className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie</span>
            </div>
            <div className={Style.row_section}>
                <div className={Style.item+ ' wow fadeUp'}>
                    <span className={Style.icon}><Person fontSize='large' /></span>
                    <span className={Style.heading}>Professional Teacher</span>
                    <p className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                </div>
                <div className={Style.item}>
                    <span className={Style.icon}><School fontSize='large' /></span>
                    <span className={Style.heading}>Course Certificate</span>
                    <p className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                </div>
                <div className={Style.item}>
                    <span className={Style.icon}><EmojiEvents fontSize='large' /></span>
                    <span className={Style.heading}>Interesting Learning</span>
                    <p className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                </div>
            </div>
        </div>
    );
}

export default Offer;