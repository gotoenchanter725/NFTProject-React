import React from 'react';
import { Topbar } from "../../../Components/Mobile/Topbar/Topbar"
import { Index as About } from "../../../Components/Mobile/About"
import {Index as Footer} from "../../../Components/Mobile/Footer"
import "./about.scss";

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    return (
        <div className={isDark ? "m_about_containerDark":"m_about_container"}>
            {isDark && <div className={"m_dark_theme_about_bg"}>
                <Topbar mode="transparent"/>
                <About />
            </div>}
            {!isDark && <>
                <Topbar mode="transparent" />
                <About />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className={"m_about_title"}>NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}
