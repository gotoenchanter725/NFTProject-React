/* eslint-disable jsx-a11y/alt-text */
import { Box, Button } from '@mui/material';
import React   from 'react';
import './styles.scss'

interface CustomAnimButtonProps {
    children?: any
    dark?: boolean
}

const CustomAnimButton:React.FC<CustomAnimButtonProps> = (props:CustomAnimButtonProps) => {
    return <Button 
                className="anim_btn" 
                sx={{ border: '1px solid #16B4FF8E'}}
                variant="outlined" 
            >
        <Box className="anim_btn_font" color={props.dark? "#021124":"white"} ><b>{props.children}</b></Box>
    </Button>
}

export default CustomAnimButton;
