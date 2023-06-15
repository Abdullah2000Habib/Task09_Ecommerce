import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { Link } from 'react-router-dom';
import cart from "../../assets/images/cart.png";
import message from "../../assets/images/message.png";
import order from "../../assets/images/order.png";
import profile from "../../assets/images/profile.png";
import { PATH } from '../../constants';
import IconHeader from '../IconHeader/IconHeader';
import ThemeButton from '../ThemeButton/ThemeButton';
import { IconsHeaderWrapper, Span } from './style';
const IconsHeader = () => {
    return (
        <IconsHeaderWrapper>
            <IconHeader img={profile} title='profile'/>
            <IconHeader img={message} title='messages'/>
            <IconHeader img={order} title='orders'/>
            <IconHeader img={cart} title='cart'/>
            <ThemeButton/>
            <Link className='logout' to={PATH.LOGIN}>
                <Span>Log Out</Span>
                <LogoutIcon/>
            </Link>
        </IconsHeaderWrapper>
    );
}

export default IconsHeader;
