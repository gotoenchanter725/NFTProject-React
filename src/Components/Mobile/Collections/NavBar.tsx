/* eslint-disable @typescript-eslint/no-redeclare */
import { ButtonGroup, Box } from '@mui/material';
import React,{ useState } from 'react';
import './styles.scss';
import _ from 'lodash'

export enum CollectionsList {
    None, All, CryptoWhales, WhackyWhales, FamousWhales
}

const navList = [
    { title: "All", id: CollectionsList.All},
    { title: "CryptoWhales", id: CollectionsList.CryptoWhales},
    { title: "WhackyWhales", id: CollectionsList.WhackyWhales},
    { title: "FamousWhales", id: CollectionsList.FamousWhales},
];

interface NaveBar {
    onClick: (id:CollectionsList) => void;
}

export const NaveBar: React.FC<NaveBar> = (props:NaveBar) => {
    const [selItem, setSelectedItem] = useState(CollectionsList.All);
    const clickList = (id:CollectionsList) => () => {
        props.onClick(id);
        setSelectedItem(id);
    }

    const renderNavBar = () => {
        return _.map(navList, (x, id)=>{
            return <div className={(selItem===x.id?'m_sub_nav_bar_active':"m_sub_nav_bar_inactive")} 
                            style={{color: 'white'}} 
                            key={id} 
                            onClick={clickList(x.id)}
                    >
                {x.title}
            </div>
        })
    }
    return (<ButtonGroup className={"m_sub_nav_bar"} sx={{width: '100%'}}>
        <Box className={"d-flex flex-row justify-content-around align-items-center"} sx={{width: '100%'}}>
            <Box className={"m_title1 d-flex flex-row justify-content-center align-items-center"} >Select <span className={"m_title2"}>Type:</span></Box>
            {renderNavBar()}
        </Box>
    </ButtonGroup>);
}