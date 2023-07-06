import React from 'react';
import img5 from "../../assets/images/imgstore2.png";
import img1 from "../../assets/images/imgstore3.png";
import img2 from "../../assets/images/imgstore4.png";
import img3 from "../../assets/images/imgstore5.png";
import img4 from "../../assets/images/storelab.png";
import SavedCard from '../SavedCard/SavedCard';
import { SavedCardsContainer, SavedCardsTitle, SavedCardsWrapper } from './style';
const SavedCards = () => {
    return (
        <SavedCardsWrapper>
            <SavedCardsTitle>Saved for later</SavedCardsTitle>
            <SavedCardsContainer>
                <SavedCard price='$99.50' description='GoPro HERO6 4K Action Camera - Black' img={img1}/>
                <SavedCard price='$99.50' description='GoPro HERO6 4K Action Camera - Black' img={img2}/>
                <SavedCard price='$99.50' description='GoPro HERO6 4K Action Camera - Black' img={img3}/>
                <SavedCard price='$99.50' description='GoPro HERO6 4K Action Camera - Black' img={img4}/>
                <SavedCard price='$99.50' description='GoPro HERO6 4K Action Camera - Black' img={img5}/>
            </SavedCardsContainer>
        </SavedCardsWrapper>
    );
}

export default SavedCards;
