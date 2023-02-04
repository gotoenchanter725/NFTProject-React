/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Grid, IconButton, styled } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Metamask from "../../../assests/images/Metamask-logo.png";
import Wallet from "../../../assests/images/walletconnect-logo.png";
import "./styles.scss"
import { ConnectorNames } from '../../../types';
import useConnectWallet from "../../../hooks/useConnectWallet"
import { connections } from '../../../hooks/entry';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
};

const styleContent = {
    width: 479,
    height: 465,
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 13,
    fontFamily: 'Mosk',
}

const closeBtn = {
    left: -48,
    top: 32
}

interface PopupProps {
    open: boolean;
    onClose: ()=>void;
}

const MetamaskButton = styled(Button)({
    background: 'transparent linear-gradient(260deg, #FFB51C 0%, #FF6704 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 37,
    height: 60,
    width: '90%',
    justifyContent: 'space-between',
    color: 'white',
    textTransform: 'none',
});

const WalletButton = styled(Button)({
    background: 'transparent linear-gradient(263deg, #16B4FF 0%, #8AD5FA 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 37,
    height: 60,
    width: '90%',
    justifyContent: 'space-between',
    color: 'white',
    textTransform: 'none',
});

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
                        <Grid container>
                            <Grid item xs={11} />
                            <Grid item xs={1} >
                                <IconButton onClick={handleClose} sx={closeBtn}><CancelRoundedIcon style={{color:'black', fontSize: 60}} /></IconButton>
                            </Grid>
                            <Grid item xs={11}>
                                <Box sx={styleContent} className="py-5 d-flex flex-column align-items-center justify-content-between">
                                    <h2><b>Connect your wallet</b></h2>
                                    <Box className="text-center wallet_content">
                                        By connecting your wallet, you agree to our Terms of Service and our 
                                        <Box color="#1A5C6F" component="span">Privacy Policy</Box>.
                                    </Box>
                                    <MetamaskButton onClick={clickMetaMask(connections[0].connectorId)} className="px-5" endIcon={<img src={Metamask} width='40' />} >MetaMask</MetamaskButton>
                                    <WalletButton onClick={clickMetaMask(connections[1].connectorId)}  className="px-5" endIcon={<img src={Wallet} width='40' />} >WalletConnect</WalletButton>
                                </Box> 
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                        
                        
                    </Box>
            </Fade>
        </Modal>
    );
}