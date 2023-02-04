import React from 'react';
import { Topbar } from "../../../Components/Web/Topbar/Topbar"
import { Index as Home } from "../../../Components/Web/Home"
import {Bg} from "../Bg"
import {Index as Footer} from "../../../Components/Web/Footer"
import "./styles.scss"

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Welcome:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark ? "home_container_dark" : "home_container"} style={{  width: '100vw'}}>
            <div className={"home_background" + (isDark ? " dark" : "")}>
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
            {isDark && <div className="dark_theme_bg">
                <Topbar mode={isDark?"dark":"light"}/>
                <Home />
            </div>}
            {!isDark && <>
                <Topbar mode={isDark?"dark":"light"}/>
                <Home />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}