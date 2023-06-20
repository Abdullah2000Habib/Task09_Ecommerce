import React from 'react';
import { ProductOfferCardDiscount, ProductOfferCardImg, ProductOfferCardTitle, ProductOfferCardWrapper } from './style';

const ProductOfferCard = ({img,title,discount}) => {
    return (
        <ProductOfferCardWrapper>
            <ProductOfferCardImg src={img}/>
            <ProductOfferCardTitle>{title}</ProductOfferCardTitle>
            <ProductOfferCardDiscount>{discount}</ProductOfferCardDiscount>
        </ProductOfferCardWrapper>
    );
}

export default ProductOfferCard;
