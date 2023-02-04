/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { IconButton, styled } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Metamask from "../../../assests/images/Metamask-logo.png";
import Wallet from "../../../assests/images/walletconnect-logo.png";
import "./styles.scss"
import useConnectWallet from "../../../hooks/useConnectWallet"
import { connections } from "../../../hooks/entry"
import { ConnectorNames } from '../../../types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
};

// declare let window: any;

interface PopupProps {
    open: boolean;
    onClose: ()=>void;
}

const MetamaskButton = styled((props: any)=>(<Button {...props} />))`
    background: transparent linear-gradient(260deg, #FFB51C 0%, #FF6704 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 12px #0000001A;
    border-radius: 37px;
    height: 60px;
    width: 90%;
    justify-content: space-between;
    color: white;
    text-transform: none;
    font: normal normal medium 26px/31px Mosk;
    @media only screen and (max-width: 420px) {
        box-shadow: 0px 0px 8px #0000001A;
        border-radius: 20px;
        height: 40px;
        font: normal normal medium 20px/24px Mosk;
    }
`

const WalletButton = styled((props: any)=>(<Button {...props} />))`
    background: transparent linear-gradient(263deg, #16B4FF 0%, #8AD5FA 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 12px #0000001A;
    border-radius: 37px;
    height: 60px;
    width: 90%;
    justify-content: space-between;
    color: white;
    text-transform: none;
    font: normal normal medium 26px/31px Mosk;
    @media only screen and (max-width: 420px) {
        box-shadow: 0px 0px 8px #0000001A;
        border-radius: 20px;
        height: 40px;
        font: normal normal medium 20px/24px Mosk;
    }
`

export default function WalletModal(props: PopupProps) {
    const [open, setOpen] = React.useState(false);
    const {connectMetaMask} = useConnectWallet();
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.onClose();
    }

    const clickMetaMask = (connectId: ConnectorNames) =>()=> {
        connectMetaMask(connectId)
        setOpen(false);
        props.onClose();
    }

    React.useEffect(()=>{
        if(props.open && open !== props.open)
            setOpen(props.open)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open])

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            sx={{
                backdropFilter: "blur(10px)",
            }}
        >
            <Fade in={open}>
                <Box sx={style} className="d-flex flex-row">
                    <Box className="wallet-modal-container py-3 pb-3 d-flex flex-column align-items-center justify-content-between">
                        <Box className="d-flex flex-row justify-content-around align-items-center w-100">
                            <Box className="m_walletTilte ms-5">Connect your wallet</Box>
                            <IconButton onClick={handleClose} ><CancelRoundedIcon className="close_btn" /></IconButton>
                        </Box>

                        <Box className="m_text-center m_wallet_content_mobile">
                            By connecting your wallet, you agree to our Terms of Service and our 
                            <Box color="#1A5C6F" component="span">Privacy Policy</Box>.
                        </Box>
                        <MetamaskButton className="px-4" onClick={clickMetaMask(connections[0].connectorId)} endIcon={<img src={Metamask} className='meta-icon' />} >MetaMask</MetamaskButton>
                        <WalletButton  className="px-4" onClick={clickMetaMask(connections[1].connectorId)} endIcon={<img src={Wallet} className='meta-icon' />} >MetaMask</WalletButton>
                    </Box> 
                    
                </Box>
            </Fade>
        </Modal>
    );
}