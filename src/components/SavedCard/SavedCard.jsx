import React from 'react';
import img1 from "../../assets/images/Vector6.png";
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { SavedCardContainer, SavedCardDescription, SavedCardImg, SavedCardPrice, SavedCardWrapper } from './style';
const SavedCard = ({img,price,description,related}) => {
    return (
        <SavedCardWrapper>
            <SavedCardImg src={img}/>
            <SavedCardContainer>
                <SavedCardPrice>{price}</SavedCardPrice>
                <SavedCardDescription>{description}</SavedCardDescription>
                {!related && <SecondaryButton img={img1} title='Move to cart' brand='google'/>}
            </SavedCardContainer>
        </SavedCardWrapper>
    );
}

export default SavedCard;
