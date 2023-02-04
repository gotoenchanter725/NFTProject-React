/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/markIcon.png";
import Dark from "../../../assests/images/Dark-toggle-icon.svg";
import Light from "../../../assests/images/Light-toggle-icon.svg";
import PieIcon from "../../../assests/images/pieIcon.png";
import './styles.scss';
import { Box, Button, IconButton } from '@mui/material';
import WalletModal from "../WalletModal"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    setDark,
    getMode,
    setCurrentTitle,
} from '../../../actions/ToggleMode';
import RightSidebar from '../../Mobile/RightSidebar';
import { useWeb3React } from '@web3-react/core';

interface TobarProps{
    mode?: string;
} 

export const Topbar:React.FC<TobarProps> = (props:TobarProps) => {
    const navigate = useNavigate();
    const isDark = useAppSelector(getMode);
    const dispatch = useAppDispatch();
    const { account, deactivate } = useWeb3React();
    const goTo = (url:string, title: string) => () => {
        dispatch(setCurrentTitle(title));
        navigate(url);
    }
    const [openModal, setOpenModal] = useState(false);
    const [openRightSidebar, setOpenRightSidebar] = useState(false);
    const openSidebar = () => {
        setOpenRightSidebar(true)
    }

    const getAddress = () => {
        return account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : "Connect wallet"
    }

    const connectWallet = () => {
        setOpenModal(true)
    }

    const disconnectWallet = () => {
        deactivate()
    }

    const mode = isDark ? "dark-" + (props.mode || "") : "light-" + (props.mode || "");

    return (<div className={`px-4 py-3 d-flex align-items-center justify-content-between bg-${mode}`}>
    <div className="d-flex align-items-center topbar_icon_container" style={{marginRight: 50}}>
        <IconButton className="ms-3" onClick={goTo("/", "")} ><img src={Mark} width='30' /></IconButton>
    </div>
    <div className="d-flex align-items-center justify-content-around w-100">
        <Button className={`m_connectBtn-${mode}`} onClick={ !account ? connectWallet:disconnectWallet} sx={{textTransform: 'none'}} ><span>{getAddress()}</span></Button>
        <IconButton className="mx-1" onClick={()=>dispatch(setDark())}><img src={isDark?Light:Dark} width="25" /></IconButton>
        <Box onClick={openSidebar} ><img src={PieIcon} width="24" /></Box>
    </div>
    <WalletModal open={openModal} onClose={()=>setOpenModal(false)} />
    <RightSidebar isOpen={openRightSidebar} onClose={()=>setOpenRightSidebar(false)} />
</div>)
}