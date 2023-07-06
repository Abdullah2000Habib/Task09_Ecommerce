import React from 'react';
import { CartCardButtons, CartCardCount, CartCardCounts, CartCardDetails, CartCardImg, CartCardLeft, CartCardLeftContainer, CartCardPrice, CartCardRemoveBtn, CartCardRight, CartCardSaveBtn, CartCardTitle, CartCardWrapper } from './style';

const CartCard = ({img,title,details,price}) => {
    return (
        <CartCardWrapper>
            <CartCardLeft>
                <CartCardImg src={img} alt="img"/>
                <CartCardLeftContainer>
                    <CartCardTitle>{title}</CartCardTitle>
                    <CartCardDetails>{details}</CartCardDetails>
                    <CartCardButtons>
                        <CartCardRemoveBtn>Remove</CartCardRemoveBtn>
                        <CartCardSaveBtn>Save for later</CartCardSaveBtn>
                    </CartCardButtons>
                </CartCardLeftContainer>
            </CartCardLeft>
            <CartCardRight>
                <CartCardPrice>{price}</CartCardPrice>
                <CartCardCounts>
                    <CartCardCount  >Qty: 1</CartCardCount   >
                    <CartCardCount  >Qty: 3</CartCardCount   >
                    <CartCardCount  >Qty: 9</CartCardCount   >
                </CartCardCounts>
            </CartCardRight>
        </CartCardWrapper>
    );
}

export default CartCard;
