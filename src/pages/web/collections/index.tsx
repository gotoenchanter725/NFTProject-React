import React, { useState } from 'react';
import { Topbar } from "../../../Components/Web/Topbar/Topbar"
import { Index as Collections } from "../../../Components/Web/Collections"
// import {Bg} from "../Bg"
import {Index as Footer} from "../../../Components/Web/Footer"
import "./styles.scss";
import { CollectionsList } from '../../../Components/Web/Collections/NavBar'

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    const [selItem, setIte] = useState(CollectionsList.MyCollection)
    const selConllectionItem=(id: CollectionsList) => {
        setIte(id);
    }
    return (
        <div className = {isDark? 'collection_container_dark d-flex flex-column' : 'collection_container d-flex flex-column'}>
            {/* <Bg /> */}
            <Topbar mode="dark" />
            <Collections selConllectionItem={selConllectionItem} />
            {/* <img src={Mark} width="730" className="bg_mark" /> */}
            <Footer showTitle={selItem!==CollectionsList.MyCollection && selItem !== CollectionsList.Uncommen} 
                    showButton={selItem!==CollectionsList.MyCollection && selItem !== CollectionsList.Uncommen}
                    showIcons={true} >
                {selItem!==CollectionsList.MyCollection && selItem !== CollectionsList.Uncommen &&  <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>}
            </Footer>
        </div>
    );
}