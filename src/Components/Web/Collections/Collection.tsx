/* eslint-disable jsx-a11y/alt-text */
import { Box } from '@mui/material';
import React from 'react';
import './styles.scss';
import CustomAnimButton from "../CustomAnimButton"

export interface CollectionProps {
    bgSrc?: any;
    hiddenBtn?: boolean;
    style?: any;
}

export const BgImg = (props: any) => {
    const BgImg = props.bgSrc;
    return BgImg ?  <img className="fron_side" src={BgImg} width="100%" height="100%" style={props.style} /> : <Box className="flip_side" />
}

export const Collection: React.FC<CollectionProps> = (props:CollectionProps) => {

    return (<Box className="collection_itm_container d-flex flex-column align-items-center p-1 my-4" sx={props.style}>
        <BgImg bgSrc={props.bgSrc} />
        <Box className="w-100 text-center py-3" style={props.hiddenBtn ? {visibility: 'hidden'}:{visibility: 'visible'}}>
            <CustomAnimButton dark={true}> Go to Opensea </CustomAnimButton>
        </Box>
    </Box>);
}