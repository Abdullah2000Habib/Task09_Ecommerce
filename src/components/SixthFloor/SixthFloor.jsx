import React from 'react';
import img from "../../assets/images/Bitmap22.png";
import { default as img4, default as img7 } from "../../assets/images/bag.png";
import img8 from "../../assets/images/gra.png";
import img6 from "../../assets/images/imgstore5.png";
import img2 from "../../assets/images/jacket.png";
import img5 from "../../assets/images/jeansshort.png";
import img3 from "../../assets/images/jzdan.png";
import { default as img1, default as img9 } from "../../assets/images/sweetir.png";
import { Container } from '../../global/components';
import RecommendedCard from '../RecommendedCard/RecommendedCard';
import { SixthFloorCards, SixthFloorTitle, SixthFloorWrapper } from './Style';
const SixthFloor = () => {
    return (    <Container>
                    <SixthFloorWrapper>
                        <SixthFloorTitle>Recommended items</SixthFloorTitle>
                            <SixthFloorCards>
                                <RecommendedCard img={img} price="10.30" title="T-shirts with multiple colors, for men"/>
                                <RecommendedCard img={img1} price="10.30" title="Jeans shorts for men blue color"/>
                                <RecommendedCard img={img2} price="12.50" title="Brown winter coat medium size"/>
                                <RecommendedCard img={img3} price="34.00" title="Jeans bag for travel for men"/>
                                <RecommendedCard img={img4} price="90.00" title="Leather wallet"/>
                                <RecommendedCard img={img5} price="9.99" title="Canon camera black, 100x zoom"/>
                                <RecommendedCard img={img6} price="8.99" title="Headset for gaming with mic"/>
                                <RecommendedCard img={img7} price="10.30" title="Smartwatch silver color modern"/>
                                <RecommendedCard img={img8} price="10.30" title="Blue wallet for men leather metarfial"/>
                                <RecommendedCard img={img9} price="80.95" title="Jeans bag for travel for men"/>
                            </SixthFloorCards>
                    </SixthFloorWrapper>
                </Container>
    );
}

export default SixthFloor;
