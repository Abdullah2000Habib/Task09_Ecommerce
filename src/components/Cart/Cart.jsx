import React from 'react';
import img from "../../assets/images/Vector5.png";
import img2 from "../../assets/images/bag.png";
import img3 from "../../assets/images/chair.png";
import img1 from "../../assets/images/jacket5.png";
import CartCard from '../../components/CartCard/CartCard';
import { CartCardSaveBtn } from '../CartCard/style';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { CartWrapper, CartWrapperContainer } from './style';
const Cart = () => {
    return (
        <CartWrapper>
            <CartCard img={img1} title="T-shirts with multiple colors, for men and lady" details="Size: medium,Color: blue,Material: Plastic Seller: Artel Market" price="$78.99"/>
            <CartCard img={img2} title="T-shirts with multiple colors, for men and lady" details="Size: medium,Color: blue,Material: Plastic Seller: Best factory LLC" price="$39.00"/>
            <CartCard img={img3} title="T-shirts with multiple colors, for men and lady" details="Size: medium,Color: blue,Material: Plastic Seller: Artel Market" price="$170.50"/>
            <CartWrapperContainer>
                <SecondaryButton img={img} title="Back to shop"  brand="facebook"/>
                <CartCardSaveBtn>Remove all</CartCardSaveBtn>
            </CartWrapperContainer>
        </CartWrapper>
    );
}

export default Cart;
