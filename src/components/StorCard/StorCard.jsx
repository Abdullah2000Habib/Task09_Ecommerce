import React from 'react';
import { StorCardButton, StorCardContainer, StorCardDescription, StorCardDetails, StorCardImg, StorCardNewPrice, StorCardOldPrice, StorCardOrder, StorCardPrice, StorCardRate, StorCardReact, StorCardScore, StorCardShipping, StorCardStars, StorCardTitle, StorCardWrapper } from './style';

const StorCard = ({img,title,newPrice,oldPrice,react,star,order,dot,rate,description}) => {
    return (
        <StorCardWrapper>
            <StorCardImg src={img}/>
            <StorCardContainer>
                <StorCardTitle>{title}</StorCardTitle>
                <StorCardDetails>
                    <StorCardPrice>
                        <StorCardNewPrice>{newPrice}</StorCardNewPrice>
                        <StorCardOldPrice>{oldPrice}</StorCardOldPrice>
                    </StorCardPrice>
                    <StorCardReact>
                        {react}
                    </StorCardReact>
                </StorCardDetails>
                <StorCardRate>
                    <StorCardStars>
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                    </StorCardStars>
                    <StorCardScore>{rate}</StorCardScore>
                    {dot}
                    <StorCardOrder>{order}</StorCardOrder>
                    {dot}
                    <StorCardShipping>Free Shipping</StorCardShipping>
                </StorCardRate>
                <StorCardDescription>{description}</StorCardDescription>
                <StorCardButton>View details</StorCardButton>
            </StorCardContainer>
        </StorCardWrapper>
    );
}

export default StorCard;
