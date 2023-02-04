/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-octal-escape */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { TextDecorator } from '../TextDecorator'
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/mark.png";
import {Element, scroller} from "react-scroll";
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';
import Carousel from '../Carousel';
import { CollectionProps } from '../Collections/Collection';
import _ from 'lodash';
// import BWhale from "../../../assests/images/whale1.png";
// import PWhale from "../../../assests/images/whale2.png";
import UnknowWhale from "../../../assests/images/whale4.png";
// import bg_light from "../../../assests/images/ocean-background.png";
// import bg_dark from "../../../assests/images/ocean-background-dark.png";
import cloud from "../../../assests/images/cloud.png";
import { CustomButton2, DiveButton } from '../../CustomWidget';
import { WhaleCard } from '../WhaleCard';

const cloneData:CollectionProps[] = [
    {
        title: "BTC Whale",
        hours: 6,
        min: 34,
        sec: 9,
        price: "10 BSC",
        bgSrc: UnknowWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: UnknowWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: UnknowWhale,
    },
];

export const Index: React.FC = () => {

    const navigate = useNavigate();
    const goTo = (url: string) => () => {
        navigate(url);
    }
    const isDark = useAppSelector(getMode);
    const mode = isDark?"dark":"light";
    const linkTo = () => {
        scroller.scrollTo('myScrollToElement', {
            duration: 1000,
            delay: 100,
          })
    }
    return (<div className={styles.m_main + " d-flex flex-column align-items-center justify-content-between"}>
        <div className={styles.m_bg + " d-flex flex-column align-items-center justify-content-between"}>
            {!isDark && <img src={cloud} className={styles.m_bg_img} />}
            <div className={styles.m_title}>
                <div>
                    <TextDecorator className={styles.m_title_first} mode={mode} >DIGITAL </TextDecorator>
                    <TextDecorator className={styles.m_title_second} mode={mode}>CRYPTO WHALES</TextDecorator>
                </div>
                <div>
                    <TextDecorator className={styles.m_title_first} mode={mode}>FOR </TextDecorator>
                    <TextDecorator className={styles.m_title_second} mode={mode}>CRYPTO WHALES.</TextDecorator>
                </div>
            </div>
            <div className={styles.m_subtitle}>
                <TextDecorator mode={mode}> Only the wealthiest whales can afford the most high end, exclusive Whale NFT’s.</TextDecorator>
            </div>
            <DiveButton ismobile={"true"} style={{ marginTop: '60px', fontSize: '15px' }} onClick={linkTo}>
                DIVE INTO THE DEEP
            </DiveButton>
        </div>

        <img src={Mark} className={styles.m_markIcon} width="50%" />

        <Element name="myScrollToElement">
            <div className="d-flex flex-column align-items-center justify-content-center">
            <div className={styles.m_collection}>
                <div className={styles.m_collection_title_first}>THE </div>
                <span className={styles.m_collection_title_second}><b>COLLECTIONS</b></span>
            </div>

            <Carousel>
                {
                _.map(cloneData, (itm, key)=>{
                            return<WhaleCard
                            bgSrc={itm.bgSrc} 
                            key={key}
                            style={{margin: '0 10px'}}
                        />
                })}

            </Carousel>
            <CustomButton2 ismobile={"true"} transparent={"true"} style={{ marginTop: 67, marginBottom: 150, font: 'Roboto', width: '220px !important', textTransform: 'none', fontWeight: 100, fontSize: '16px !important' }} onClick={goTo("/")}>
                Discover the whole Collection
            </CustomButton2>
            </div>                             
        </Element>
    </div>);
}