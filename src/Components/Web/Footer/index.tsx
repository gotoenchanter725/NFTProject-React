/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.scss";
import { ButtonGroup, IconButton, Box } from '@mui/material';
import Discord from "../../../assests/images/Discord-icon.svg";
import Telegram from "../../../assests/images/Telegram-icon.svg";
import Twitter from "../../../assests/images/Twitter-icon.svg";
import FaceBook from "../../../assests/images/FaceBook-icon.svg"
import DiscordH from "../../../assests/images/Discord-icon-hover.svg";
import TelegramH from "../../../assests/images/Telegram-icon-hover.svg";
import TwitterH from "../../../assests/images/Twitter-icon-hover.svg";
import FaceBookH from "../../../assests/images/FaceBook-icon-hover.svg"

import { CustomButton } from '../../CustomWidget';

interface FooterProps{
    showTitle?: boolean;
    showButton?: boolean;
    showIcons?: boolean;
    children?: any;
}

export const Index:React.FC<FooterProps> = (props: FooterProps) => {
    const [facebookHover, setFacebookHover] = useState(false);
    const [discordHover, setDiscordHover] = useState(false);
    const [telegramHover, setTelegramHover] = useState(false);
    const [twitterHover, setTwitterHover] = useState(false);

    const hoverFaceBook = (con: boolean) => () => {
        setFacebookHover(con)
    }
    const hoverDiscord = (con: boolean) => () => {
        setDiscordHover(con)
    }
    const hoverTelegram = (con: boolean) => () => {
        setTelegramHover(con)
    }
    const hoverTwitter = (con: boolean) => () => {
        setTwitterHover(con)
    }
    return (
        <div className="footer d-flex flex-column align-items-center justify-content-between" >
            {props.children}
            {props.showTitle && <div className="title" style={{maxWidth:"730px"}}>
                When you join one of our social you get access to our community. You will receive updates about new NFT auctions, general news about our projects and get the chance investors to buy and sell our NFT’s. Only whales can join after they purchased their first whale item.
            </div>}
            {props.showButton && <CustomButton style={{ marginTop: '80px', fontSize: '18px', fontFamily:'Avenir', fontWeight:'600' }} endIcon={<ArrowForwardIcon />} >
                JOIN NOW
            </CustomButton>}
            {props.showIcons && <ButtonGroup style={{marginBottom: '50px',  marginTop: '276px'}}>
            <IconButton className="mx-3"><a href="https://facebook.com"><img src={!facebookHover ? FaceBook : FaceBookH} onMouseEnter={hoverFaceBook(true)} onMouseLeave={hoverFaceBook(false)} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://telegram.com"><img src={!discordHover ? Telegram : TelegramH} onMouseEnter={hoverDiscord(true)} onMouseLeave={hoverDiscord(false)}/></a></IconButton>
                <IconButton className="mx-3"><a href="https://discord.com"><img src={!telegramHover ? Discord : DiscordH} onMouseEnter={hoverTelegram(true)} onMouseLeave={hoverTelegram(false)}/></a></IconButton>
                <IconButton className="mx-3"><a href="https://twitter.com/"><img src={!twitterHover ? Twitter : TwitterH} onMouseEnter={hoverTwitter(true)} onMouseLeave={hoverTwitter(false)}/></a></IconButton>
            </ButtonGroup>}
            <Box className="mb-5" >©2021 CryptoWhales</Box>
        </div>
    );
}