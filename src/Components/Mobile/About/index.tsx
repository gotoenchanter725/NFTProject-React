/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './About.module.scss';
import { CircleItem } from './CircleItem';
import Mark from "../../../assests/images/markIcon.png";
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';
import bg_light from "../../../assests/images/ocean-background.png";
import bg_dark from "../../../assests/images/ocean-background-dark.png";
import LazyShow from '../../Common/LazyShow';
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";

export const Index: React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (<div className={styles.m_main + " d-flex flex-column align-items-center justify-content-between"}>
        <div className="d-flex flex-row align-items-center">
            <img src={Mark} width='50' /><span style={{fontSize: '40px', fontWeight: 600}}>ryptowhales</span>
        </div>
        <img src={!isDark ? bg_light : bg_dark} className={styles.m_bg_img} height="20%" width="100%" />
        <div className={styles.m_content}>
            Whales in crypto are legendary icons of wealth and status. They include the likes of Vitalik Buterin and Mark Cuban. Taking the concept of a crypto whale and turning it into a visual representation of a luxury-crypto-themed-whale NFT creates a material representation of the wealth and power that comes with being a crypto whale. To hold the whale makes you the whale. We intend to auction each unique whale at a steep price in its own native currency. This is less of a product and more of a trophy, a trophy marketed and directed to the largest holders. A way to display your status and unbelievable wealth.
        </div>
        <div className={styles.m_subtitle}>
            THE <b>WHALEMAP 2021/ 2022</b>
        </div>
        <LazyShow direction='top'>
        <CircleItem>Q4</CircleItem>
        <div className={styles.m_subcontent + " d-flex flex-column align-items-center justify-content-center"}>
            <div>- Create branding CryptoWhales </div>
            <div>- Launching CryptoWhales website</div>
            <div> - Creating the first 10,000 CryptoWhales</div>
            <div> - </div>
            <div> - </div>
            <div> - </div>
        </div>
        </LazyShow>
        <LazyShow direction='top'>
        <CircleItem>Q1</CircleItem>
        <div className={styles.m_subcontent + " d-flex flex-column align-items-center justify-content-center"}>
            <div>- Create branding CryptoWhales </div>
            <div>- Launching CryptoWhales website</div>
            <div> - Creating the first 10,000 CryptoWhales</div>
            <div> - 1st Marketing push CryptoWhales</div>
            <div> - </div>
            <div> - </div>
        </div>
        </LazyShow>
        <LazyShow direction='top'>
        <CircleItem>Q2</CircleItem>
        <div className={styles.m_subcontent + " d-flex flex-column align-items-center justify-content-center"}>
            <div>- Create branding CryptoWhales </div>
            <div>- Launching CryptoWhales website</div>
            <div> - Creating the first 10,000 CryptoWhales</div>
            <div> - 1st Marketing push CryptoWhales</div>
            <div> - CryptoWhale NFT giveaway</div>
            <div> - Launching the first Uncommen Whale collection</div>
        </div>
        </LazyShow>
    </div>);
}