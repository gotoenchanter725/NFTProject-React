/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react';
import "./styles.scss";
import { Box, Button, Grid, styled, } from '@mui/material';
// import Mark from "../../../assests/images/markIcon.png";
import Ether from "../../../assests/images/etherIcon.svg";
import Crypto from "../../../assests/images/CryptoWhales-logo.svg";
import CustomAnimButton from '../CustomAnimButton';

interface MintProps {
}

const CustomButton = styled(Button)(({theme})=>({
    background: 'transparent linear-gradient(226deg, #DFF6FD 0%, #9DD5E6 100%) 0% 0% no-repeat padding-box',
    borderRadius: 8,
    color: '#053554',
    minWidth: '50px !important',
    font: 'normal normal bold 25px/70px Work Sans'
}));

const CustomField = styled((props: any) => (
    <input {...props} />
  ))`
    background: #073C58 0% 0% no-repeat padding-box;
    border: 0.5px solid #086A98;
    color: white;
    text-align: center;
    border-radius: 4px;
    padding: 10px 5px;
    margin-left: 10px;
    margin-right: 10px;
    font: normal normal 600 18px/21px Work Sans !important;
  `;
const HoverButton = styled(Button)(({theme})=>({
    backgroundColor: '#9B9B9B',
    color: 'white',
    borderRadius: 5,
    '@:hover':{
        backgroundColor: '#16B4FF',
        color: 'white',
    }
}));

export const Index: React.FC<MintProps> = (props: MintProps) => {
    const [isHover, setHover] = useState(false);
    const [whales, setWhales] = useState(0)

    const countDown = () => {
        if(whales === 0) return;
        setWhales(whales-1)
    }

    const countUp = () => {
        setWhales(whales+1)
    }

    const onChangeWhales = (e: any) => {
        if(isNaN(e.target.value)) return;
        setWhales(Number(e.target.value))
    }
    return (
        <Grid container className="mint_main" >
            <Grid item xs={1} />
            <Grid item xs={4} style={{zIndex: 10}}>
                <Box className="d-flex flex-column align-items-center justify-content-center l_container" color="white">
                    <Box className="mint_title">Mint your own</Box>
                    <div className="d-flex flex-row align-items-center" style={{marginTop: '-20px'}}>
                        <img src={Crypto} width='350' className='mt-2' />
                    </div>
                    <Box className="d-flex flex-column align-items-center justify-content-between l_element w-100">
                        <Box className="d-flex flex-row px-4 py-2 text_field justify-content-around align-items-center w-100">
                            <Box className="py-2" style={{font: 'normal normal 900 25px/34px Avenir'}}>Total adopted whales: </Box>
                            <Box className="text-right">0 / 10,000</Box>
                        </Box>
                        <Box className="w-100 px-4 py-3 ps-5 ether_board mt-3  w-100">
                            <Box color="#16B4FF" style={{fontSize: 18}} >Mint 1 CryptoWhale for</Box>
                            <Box className="d-flex flex-row align-items-center justify-content-start">
                                <img src={Ether} width='30' className="me-3" />
                                <Box className="ms-3 me-5" style={{fontSize: 24}}>0.01</Box>
                                <Box style={{fontSize: 24}}><b>ETH</b></Box>
                            </Box>
                        </Box>
                        <Grid container className="w-100 mt-3">
                            <Grid item xs={7}>
                                <Box className="d-flex flex-column align-items-start justify-content-start ">
                                    <Box color="#16B4FF" style={{fontSize:24}}>How many whales?</Box>
                                    <Box className="w-100 mt-3 d-flex flex-row align-items-center justify-content-between" >
                                            <CustomButton style={{width: 50, height: 50}} onClick={countDown} >-</CustomButton>
                                            <CustomField className="input_field w-100" value={whales} onChange={onChangeWhales} />
                                            <CustomButton style={{width: 50, height: 50}} onClick={countUp}>+</CustomButton>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={1}/>
                            <Grid item xs={4}>
                                <Box className="d-flex flex-column align-items-start justify-content-start">
                                    <Box color="#16B4FF"  style={{fontSize:24}} >Total costs</Box>
                                    <Box className="w-100 py-2 px-3 total_input mt-3 d-flex flex-row align-items-center justify-content-between">
                                        <img src={Ether} width='20' />
                                        <span className="ms-1 me-1">0.02</span>
                                        <span style={{fontFamily: 'Roboto'}}>ETH</span>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <HoverButton 
                            className="mt-5 py-3 font" 
                            variant="contained" 
                            fullWidth={true} 
                            onMouseEnter={()=>setHover(true)}
                            onMouseLeave={()=>setHover(false)}
                        >
                            {!isHover?'SELECT AMOUNT OF WHALES':'MINT 2 WHALES FOR 0.02 ETH + GAS'}
                        </HoverButton>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={4} style={{zIndex: 10}}>
                <Box className="d-flex flex-column align-items-start justify-content-center r_container" color="white">
                    <Box className="r_title">About</Box>
                    <Box className="r_container mb-3">
                        Whales in crypto are legendary icons of wealth and status. They include the likes of Vitalik Buterin and Mark Cuban. Taking the concept of a crypto whale and turning it into a visual representation of a luxury-crypto-themed-whale NFT creates a material representation of the wealth and power that comes with being a crypto whale. To hold the whale makes you the whale. This is less of a product and more of a trophy, a trophy marketed and directed to the largest holders. A way to display your status and unbelievable wealth.
                    </Box>
                    <Box className="mx-auto">
                        <CustomAnimButton>Go to Opensea</CustomAnimButton>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}