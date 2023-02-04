import React from 'react';
import { Topbar } from "../../../Components/Web/Topbar/Topbar"
import { Index as Mint } from "../../../Components/Web/Mint"
import {Bg} from "./MintBg"
import {Index as Footer} from "../../../Components/Web/Footer"
import "./styles.scss"

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark?"mint_container_dark":"mint_container"}>
            
            <Topbar mode="dark"/>
            <Bg />
            <Mint />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}