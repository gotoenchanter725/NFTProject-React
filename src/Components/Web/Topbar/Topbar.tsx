/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/markIcon.png";
import Dark from "../../../assests/images/Dark-toggle-icon.svg";
import Light from "../../../assests/images/Light-toggle-icon.svg";
import styles from './Topbar.module.scss';
import { TextDecorator } from '../TextDecorator'
import { Button, IconButton } from '@mui/material';
import {Routes} from "../../../Routes";
import _ from 'lodash'
import WalletModal from "../WalletModal"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    setDark,
    getMode,
    setCurrentTitle,
    getCurrentTitle,
} from '../../../actions/ToggleMode';
import { useWeb3React } from '@web3-react/core';

interface TobarProps{
    mode?: string;
} 

export const Topbar:React.FC<TobarProps> = (props:TobarProps) => {
    const navigate = useNavigate();
    const isDark = useAppSelector(getMode);
    const dispatch = useAppDispatch();
    const { account, deactivate } = useWeb3React()
    const goTo = (url:string, title: string) => () => {
        dispatch(setCurrentTitle(title));
        navigate(url);
    }

    const [openModal, setOpenModal] = useState(false);
    const mode = props.mode ? props.mode : "light";
    const renderNavBar = () => {
        return _.map(Routes.webRoute, (item, id)=> {
            if(item.hidden) return null;
            return <TextDecorator key={id} className={styles.navText} style={useAppSelector(getCurrentTitle)===item.title?{color: '#16B4FF'}:{}} onClick={goTo(item.path, item.title)} mode={mode} >
                {item.title}
            </TextDecorator>
        })
    }

    const connectWallet = () => {
        setOpenModal(true)
    }

    const disconnectWallet = () => {
        deactivate()
    }

    const getAddress = () => {
        return account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : "Connect wallet"
    }
    return (<div className="ps-4 pe-5 pt-4 d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <IconButton className="ms-3" onClick={goTo("/", "")} ><img src={Mark} width='45' /></IconButton>
        {renderNavBar()}
    </div>
    <div className="d-flex align-items-center">
        <IconButton className="mx-5" onClick={()=>dispatch(setDark())}><img src={isDark?Light:Dark} /></IconButton>
        <Button className={styles.connectBtn}onClick={ !account ? connectWallet:disconnectWallet} sx={{textTransform: 'none', letterSpacing: 2}} ><TextDecorator mode={mode}>{getAddress()}</TextDecorator></Button>
    </div>
    <WalletModal open={openModal} onClose={()=>setOpenModal(false)} />
</div>);
}