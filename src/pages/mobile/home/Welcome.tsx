import React from 'react';
import { Topbar } from "../../../Components/Mobile/Topbar/Topbar"
import { Index as Home } from "../../../Components/Mobile/Home"
import { Bg } from "../Bg"
import { Index as Footer } from "../../../Components/Mobile/Footer"
import "./styles.scss"

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const WelcomeMobile: React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (

        <div className={isDark ? "m_home_container_dark" : "m_home_container"} style={{  width: '100vw'}}>
            <div className={"m_home_background" + (isDark ? " dark" : "")}>
                <div className="water"></div>
            </div>
            <svg style={{display: 'none'}}>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="sea-filter" numOctaves="3" seed="3" baseFrequency="0.02 0.05"></feTurbulence>
                    <feDisplacementMap scale="70" in="SourceGraphic"></feDisplacementMap>
                    <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="200s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
                </filter>
            </svg>
            <Bg />
            {isDark && <div className="m_dark_theme_bg">
                <Topbar mode="transparent" />
                <Home />
            </div>}
            {!isDark && <>
                <Topbar mode="transparent" />
                <Home />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="m_about_title">NEVER MISS ANYTHING. <span style={{ fontWeight: 600 }}>JOIN NOW</span></div>
            </Footer>
        </div>

        // <div className={isDark? "m_home_container_dark":"m_home_container"}>

        // </div>
    );
}