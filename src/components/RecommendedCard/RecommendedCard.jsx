import React from 'react';
import { RecommendedCardImg, RecommendedCardPrice, RecommendedCardTitle, RecommendedCardWrapper } from './Style';

const RecommendedCard = ({img,price,title}) => {
    return (
        <RecommendedCardWrapper>
            <RecommendedCardImg src={img}/>
            <RecommendedCardPrice>{price}$</RecommendedCardPrice>
            <RecommendedCardTitle>{title}</RecommendedCardTitle>
        </RecommendedCardWrapper>
    );
}

export default RecommendedCard;
