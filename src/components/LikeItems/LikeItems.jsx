import React from 'react';
import img1 from "../../assets/images/jacket1.png";
import img2 from "../../assets/images/jacket2.png";
import img3 from "../../assets/images/jacket3.png";
import img4 from "../../assets/images/jacket4.png";
import img5 from "../../assets/images/jacket5.png";
import LikeCard from '../LikeCard/LikeCard';
import { LikeItemsContainer, LikeItemsTitle, LikeItemsWrapper } from './style';
const LikeItems = () => {
    return (
        <LikeItemsWrapper>
            <LikeItemsTitle>You may like</LikeItemsTitle>
            <LikeItemsContainer>
                <LikeCard title="Apple Watch Series Space Gray" price="$7.00 - $99.50" img={img1}/>
                <LikeCard title="Apple Watch Series Space Gray" price="$7.00 - $99.50" img={img2}/>
                <LikeCard title="Apple Watch Series Space Gray" price="$7.00 - $99.50" img={img3}/>
                <LikeCard title="Apple Watch Series Space Gray" price="$7.00 - $99.50" img={img4}/>
                <LikeCard title="Apple Watch Series Space Gray" price="$7.00 - $99.50" img={img5}/>
            </LikeItemsContainer>
        </LikeItemsWrapper>
    );
}

export default LikeItems;
