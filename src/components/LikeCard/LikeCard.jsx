import React from 'react';
import { LikeCardContainer, LikeCardImg, LikeCardPrice, LikeCardTitle, LikeCardWrapper } from './style';

const LikeCard = ({img,title,price}) => {
    return (
        <LikeCardWrapper>
            <LikeCardImg src={img}/>
            <LikeCardContainer>
                <LikeCardTitle>{title}</LikeCardTitle>
                <LikeCardPrice>{price}</LikeCardPrice>
            </LikeCardContainer>
        </LikeCardWrapper>
    );
}

export default LikeCard;
