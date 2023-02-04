/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Button, ButtonGroup } from '@mui/material';
import React,{ useState } from 'react';
import './styles.scss';
import _ from 'lodash'
import boxIcon from "../../../assests/images/box-icon.png"

export enum CollectionsList {
    None, MyCollection, Uncommen, Rare, Epic, Legendary, Crypto
}

const navList = [
    {className: "fill_btn", title: "My collection", variant: "text", icon: boxIcon, id: CollectionsList.MyCollection},
    { title: "Uncommen Whales", variant: "text", id: CollectionsList.Uncommen},
    { title: "Rare Whales", variant: "text", id: CollectionsList.Rare},
    { title: "Epic Whales", variant: "text", id: CollectionsList.Epic},
    { title: "Legendary whales", variant: "text", id: CollectionsList.Legendary},
    { title: "Crypto whales", variant: "text", id: CollectionsList.Crypto},
];

interface NaveBar {
    onClick: (id:CollectionsList) => void;
}

export const NaveBar: React.FC<NaveBar> = (props:NaveBar) => {
    const [selItem, setSelectedItem] = useState(CollectionsList.MyCollection);
    const clickList = (id:CollectionsList) => () => {
        props.onClick(id);
        setSelectedItem(id);
    }

    const renderNavBar = () => {
        return _.map(navList, (x, id)=>{
            return <Button className={x.className + (selItem===x.id?" sub_nav_bar_active":" sub_nav_bar_inactive")} 
                            style={{color: 'white'}} 
                            variant={x.variant as any} 
                            endIcon={<img src={x.icon} width="30" />} 
                            key={id} 
                            onClick={clickList(x.id)}
                    >
                {x.title}
            </Button>
        })
    }
    return (<ButtonGroup className="sub_nav_bar mt-5 py-3" sx={{width: '100%'}}>
        {renderNavBar()}
    </ButtonGroup>);
}