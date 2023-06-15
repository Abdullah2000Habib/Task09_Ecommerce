import React from 'react';
import cart from "../../assets/images/cart.png";
import message from "../../assets/images/message.png";
import order from "../../assets/images/order.png";
import profile from "../../assets/images/profile.png";
import IconHeader from '../IconHeader/IconHeader';
import { IconsHeaderWrapper } from './style';
const IconsHeader = () => {
    return (
        <IconsHeaderWrapper>
            <IconHeader img={profile} title='profile'/>
            <IconHeader img={message} title='messages'/>
            <IconHeader img={order} title='orders'/>
            <IconHeader img={cart} title='cart'/>
        </IconsHeaderWrapper>
    );
}

export default IconsHeader;
