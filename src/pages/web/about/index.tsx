import React from 'react';
import { Topbar } from "../../../Components/Web/Topbar/Topbar"
import { Index as About } from "../../../Components/Web/About"
import {Index as Footer} from "../../../Components/Web/Footer"
import "./styles.scss";

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    return (
        <div className={isDark?"about_container_dark":"about_container"}>
            <Topbar mode="dark" />
            <About />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}
