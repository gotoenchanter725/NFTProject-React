import React from 'react';
import { Topbar } from "../../../Components/Mobile/Topbar/Topbar"
import { Index as Collections } from "../../../Components/Mobile/Collections"
// import {Bg} from "../Bg"
import {Index as Footer} from "../../../Components/Mobile/Footer"
import "./styles.scss";
// import { CollectionsList } from '../../../Components/Mobile/Collections/NavBar'

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    // const [selItem, setIte] = useState(CollectionsList.All)
    // const selConllectionItem=(id: CollectionsList) => {
    //     setIte(id);
    // }
    return (
        <div className = {isDark? 'm_collection_container_dark d-flex flex-column' : 'm_collection_container d-flex flex-column'}>
            <Topbar />
            <Collections />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className={"m_about_title"}>NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}