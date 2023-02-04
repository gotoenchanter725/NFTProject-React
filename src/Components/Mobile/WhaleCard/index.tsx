/* eslint-disable jsx-a11y/alt-text */
import { Box } from '@mui/material';
import React from 'react';
import './styles.scss';

export interface WhaleCardProps {
    bgSrc?: any;
    style?: any;
}

export const WhaleCard: React.FC<WhaleCardProps> = (props:WhaleCardProps) => {

    return (<Box className={"d-flex flex-column justify-content-center align-items-center m_whalecard_container pb-2"} style={props.style}>
        <img src={props.bgSrc} width={"100%"} style={{borderRadius: '15px 15px 0px 0px '}}/>
        <Box className='m_whalecard_title' color="white">Crypto whales</Box>
        <button className="m_whale_btn"><div style={{transform:'rotate(180deg)', color: 'white', fontSize: 16,fontWeight: 500}}>DISCOVER NOW</div></button>
    </Box>);
}