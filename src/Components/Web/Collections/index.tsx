import { Box, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { NaveBar } from './NavBar';
import './styles.scss';
import { CollectionsList } from './NavBar'
import {Collection} from './Collection';

import BWhale from "../../../assests/images/whale1.png";
import PWhale from "../../../assests/images/whale2.png";
import UnknowWhale from "../../../assests/images/whale3.png";
import _ from 'lodash';

interface CollectionsProps {
    selConllectionItem?: (id:CollectionsList)=>void;
}
export const Index: React.FC<CollectionsProps> = (props:CollectionsProps) => {
    const [itmList, setItmList] = useState<any[]>([]);
    // const [itmListId, setItmListId] = useState(CollectionsList.None)

    useEffect(()=>{
        setItmList([BWhale, PWhale, BWhale, PWhale])
    }, [])

    const clickedListItem = (id:CollectionsList) => {
        // setItmListId(id)
        loadCollectionItems(id);
        props.selConllectionItem && props.selConllectionItem(id);
    }

    const loadCollectionItems = (id:CollectionsList) => {
        switch(id) {
            case CollectionsList.MyCollection:
                setItmList([BWhale, PWhale, BWhale, PWhale])
                break;
            case CollectionsList.Uncommen:
                setItmList([UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale,UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale])
                break;
            case CollectionsList.Rare:
                setItmList([]);
                break;
            case CollectionsList.Epic:
                setItmList([]);
                break;
            case CollectionsList.Legendary:
                setItmList([]);
                break;
            case CollectionsList.Crypto:
                setItmList([]);
                break;
            default:
                break;
        }
    }

    const renderCollectionContainer = () => {
        return <Grid container spacing={6} justifyContent={"space-between"} alignItems={"center"} >
            {
                _.map(itmList, (itm, key)=>{
                    return <Grid item md={3} key={key}> 
                    <Collection bgSrc={itm} />
                    </Grid>
                })
            }
        </Grid>
    }

    return (<Box className="sub_container">
        <NaveBar onClick={clickedListItem} />
        {/* {loadCollectionItems()} */}
        {renderCollectionContainer()}
    </Box>);
}