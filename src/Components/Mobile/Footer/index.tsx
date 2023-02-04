import React  from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.scss";
import { Box } from '@mui/material';
import useMobile from '../../../hooks/useMobile';
import { CustomButton } from '../../CustomWidget';

interface FooterProps{
    showTitle?: boolean;
    showButton?: boolean;
    showIcons?: boolean;
    children?: any;
}

export const Index:React.FC<FooterProps> = (props: FooterProps) => {
    const {isMobile} = useMobile();
    return (
        <div className="m_footer d-flex flex-column align-items-center justify-content-between" >
            {props.children}
            {props.showTitle && <div className="m_title">
                When you join one of our social you get access to our community. You will receive updates about new NFT auctions, general news about our projects and get the chance investors to buy and sell our NFT’s. Only whales can join after they purchased their first whale item.
            </div>}
            {props.showButton && <CustomButton ismobile={isMobile ? "true" : "false"} style={{ marginTop: '80px', marginBottom: 220 }} endIcon={<ArrowForwardIcon />} >
                JOIN NOW
            </CustomButton>}
            <Box className="mb-5 m_cpwrite" >©2021 CryptoWhales</Box>
        </div>
    );
}