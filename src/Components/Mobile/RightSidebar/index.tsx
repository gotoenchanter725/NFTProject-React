/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material'
import {FC, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch  } from '../../../app/hooks'
import {
    getMode,
    setCurrentTitle,
    getCurrentTitle,
} from '../../../actions/ToggleMode'
import styles from './styles.module.scss'
import PieIcon from "../../../assests/images/pieIcon.png"
import Mark from "../../../assests/images/markIcon.png";
import { Routes } from '../../../Routes'
import _ from 'lodash'
import { MenuButton } from '../../CustomWidget'

interface RightSidebarProps {
    isOpen: boolean;
    onClose: ()=>void;
}

const RightSidebar: FC<RightSidebarProps> = (props: RightSidebarProps) => {

    const navigate = useNavigate();
    const isDark = useAppSelector(getMode);
    const [isOpen, setOpen] = useState(props.isOpen)
    useEffect(()=>{
        if(isOpen !== props.isOpen) {
            setOpen(props.isOpen)
        }
    },[props.isOpen])
    const dispatch = useAppDispatch();
    const goTo = (url:string, title: string) => () => {
        dispatch(setCurrentTitle(title));
        navigate(url);
        close();
    }

    const currentTitle = useAppSelector(getCurrentTitle);

    const renderNavBar = () => {
        return _.map(Routes.mobileRoute, (item, id)=> {
            if(item.hidden) return null;
            return <MenuButton key={id} className="mb-4" variant= "outlines" isfilled={currentTitle===item.title ? "true":"false"}  onClick={goTo(item.path, item.title)} isdark={isDark} >
                {item.title}
            </MenuButton>
        })
    }

    const close = () => {
        setOpen(false);
        props.onClose();
    }

    return (<Box className={styles.rightSidebar_container + " " + (isOpen ? styles.rightSidebar_container_active : styles.rightSidebar_container_inactive) + " vh-100 w-100"}>
        <Box className={(isDark ? styles.dark : styles.light) + " " + styles.rightSidebar_container + " d-flex flex-column justify-content-start align-items-center"}>
        {/* <Box className={styles.rightSidebar_container + " d-flex flex-column justify-content-center align-items-center"}> */}
            <Box className={(isDark ? styles.darkTitle : styles.lightTitle)+ " " + styles.title + " w-100 d-flex flex-row justify-content-end align-items-center me-5 mt-5"}>
                <Box className="me-4">Menu</Box>
                <Box onClick={close}><img src={PieIcon} width="23" /></Box>
            </Box>
            <Box className="mb-5" style={{marginTop: 100}} onClick={goTo("/", "")}><img src={Mark} width="32" /></Box>
            {renderNavBar()}
        </Box>
    </Box>)
}

export default RightSidebar;