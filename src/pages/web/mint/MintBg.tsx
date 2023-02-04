/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import Ocean from "../../../assests/images/ocean-background.png";
import jellyfish from "../../../assests/images/Jellyfish.svg";
import "./styles.scss";

export const Bg:React.FC = () => {
    const renderJellyFish = () => {
        return <>
            <img src={jellyfish} className="jellyfish-mint-1"/>
            <img src={jellyfish} className="jellyfish-mint-2"/>
            <img src={jellyfish} className="jellyfish-mint-3"/>
        </>
    }

    const renderBubbles = () => {
        return <div id="mint-background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
    </div>
    }

    return (
        <div className="mint_bg">
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}