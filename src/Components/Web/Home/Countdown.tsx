/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-octal-escape */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styles from './Home.module.scss';
import WhaleIcon from  "../../../assests/images/whaleicon.png"
import { getMode } from '../../../actions/ToggleMode';
import { useAppSelector } from '../../../app/hooks';

export const Countdwon: React.FC = () => { 
    const isDark = useAppSelector(getMode);
    return <div className={!isDark ? styles.countdown_container : styles.countdown_container_dark}>
        <div className={!isDark ? styles.countdown : styles.countdown_dark}>Total Whales done: {'0 / 10,000'}</div>
        <div className={!isDark ? styles.slidebar_container : styles.slidebar_container_dark}>
            <div className={!isDark ? styles.slidebar : styles.slidebar_dark } style={{width: '40%'}}></div>
            <img src={WhaleIcon} width={60} style={{position: 'absolute', left: 'calc(40% - 30px)', top: -20, zIndex: 10}} />
        </div>
        <div className={!isDark ? styles.fontColor : styles.fontColor_dark}>40%</div>
    </div>
}