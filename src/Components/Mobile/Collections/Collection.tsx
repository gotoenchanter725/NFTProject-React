/* eslint-disable jsx-a11y/alt-text */
import { Box } from '@mui/material';
import React from 'react';
import './styles.scss';
import { Label, GetItButton, ItemTitle } from '../../CustomWidget';
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export interface CollectionProps {
    bgSrc?: any;
    style?: any;
    title: string;
    isSold?: boolean;
    hours?: number;
    min?: number;
    sec?: number;
    price: string;
    soldPrice?: string;
    cell?: number;
}

export const BgImg = (props: any) => {
    const BgImg = props.bgSrc;
    return BgImg ?  <img className={"m_fron_side"} src={BgImg} width="100%" height="100%" style={props.style} /> : <Box className="m_flip_side" style={props.style} />
}

export const Collection: React.FC<CollectionProps> = (props:CollectionProps) => {

    const isDark = useAppSelector(getMode);
    const renderInfoPage = () => {
        if(props.isSold) {
            return (<Box style={{marginRight: 'auto'}}>
                <table width="100%" className={props.cell === 2 ? 'table-padding2':'table-padding'}>
                    <tbody>
                        <tr>
                            <td colSpan={3} className={"m_sub_title_font"} style={isDark?{color: 'white'}:{}}>Auction ended</td>
                        </tr>
                        <tr>
                            <td colSpan={3} className={props.cell === 2 ? "m_main_info_font2" : "m_main_info_font"} style={isDark?{color: 'white'}:{}}>Sold for {props.soldPrice}</td>
                        </tr>
                        <tr style={{visibility: 'hidden'}}>
                            <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"}>Hours</td>
                            <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"} >Min</td>
                            <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"}>Sec</td>
                        </tr>
                    </tbody>
                </table>
            </Box>)
        } else {
            return (<Box  style={{marginRight: 'auto'}}>
                <table width="100%" className={props.cell === 2 ? 'table-padding2':'table-padding'}>
                    <tr>
                        <td colSpan={3} className={props.cell === 2 ? "m_sub_title_font" : "m_sub_title_font2"} style={isDark?{color: 'white'}:{}}>Auction ending in</td>
                    </tr>
                    <tr>
                        <td className={props.cell === 2 ? "m_main_info_font2" : "m_main_info_font"} style={isDark?{color: 'white'}:{}}>{props.hours}</td>
                        <td className={props.cell === 2 ? "m_main_info_font2" : "m_main_info_font"} style={isDark?{color: 'white'}:{}}>{props.min}</td>
                        <td className={props.cell === 2 ? "m_main_info_font2" : "m_main_info_font"} style={isDark?{color: 'white'}:{}}>{props.sec}</td>
                    </tr>
                    <tr>
                        <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"}>Hours</td>
                        <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"} >Min</td>
                        <td className={props.cell === 2 ? "m_time_font2" : "m_time_font"}>Sec</td>
                    </tr>
                </table>
            </Box>)
        }
    }

    return (<Box className={(!isDark?"m_collection_itm_container":"m_collection_itm_container_dark") + " my-4 d-flex flex-column justify-content-center align-items-center h-full"} style={props.style}>
        <ItemTitle isdark={isDark} cell={props.cell} >{props.title}</ItemTitle>
        <BgImg className={props.cell === 2 ? 'my-1':'my-2'} bgSrc={props.bgSrc} style={{position: 'relative'}}/>
        <Label cell={props.cell}>{props.price}</Label>
         {renderInfoPage()}
         <GetItButton cell={props.cell} isdark={isDark}>GET IT NOW</GetItButton>
    </Box>);
}