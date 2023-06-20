
import React from 'react';
import laptop from "../../assets/images/image-34.png";
import camera from "../../assets/images/imgcard7.png";
import phone from "../../assets/images/imgstore2.png";
import headphone from "../../assets/images/related3.png";
import watch from "../../assets/images/watch.png";
import { Container } from '../../global/components';
import Offers from '../Offers/Offers';
import ProductOfferCard from '../ProductOfferCard/ProductOfferCard';
import { SecondFloorWrapper } from './style';


const SecondFloor = () => {
    return (
        <Container>
            <SecondFloorWrapper>
                <Offers/>
                <ProductOfferCard img={watch} title="Smart watches" discount="-25%"/>
                <ProductOfferCard img={laptop} title="Laptops" discount="-15%"/>
                <ProductOfferCard img={camera} title="GoPro Cameras" discount="-40%"/>
                <ProductOfferCard img={headphone} title="HeadPhones" discount="-25%"/>
                <ProductOfferCard img={phone} title="Canon Camera" discount="-25%"/>
            </SecondFloorWrapper>
        </Container>
    );
}

export default SecondFloor;
