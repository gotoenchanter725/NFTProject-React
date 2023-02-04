import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import './About.scss';

const Item = styled(Avatar)({
    background: 'transparent radial-gradient(closest-side at 50% 50%, #003C58 0%, #005A84 100%) 0% 0% no-repeat padding-box',
    font: 'normal normal 300 16px/35px Avenir',
    marginBottom: '22px',
});

export const Line = styled((props: any) => (
    <div {...props} />
  ))`
    width: 1px;
    height: 120px;
    background-color: #004F74;
  `;

export const CircleItem: React.FC = () => {
    return (
        <div className="d-flex flex-column align-items-center" style={{marginTop: '12px'}}>
            <Line />
            <Item>Q4</Item>
        </div>
    );
}