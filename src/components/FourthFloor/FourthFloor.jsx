import React from 'react';
import gra from "../../assets/images/gra.png";
import headphone2 from "../../assets/images/image-29.png";
import laptop from "../../assets/images/image-34.png";
import img from "../../assets/images/image-98.png";
import camera from "../../assets/images/imgcard7.png";
import iphone from "../../assets/images/imgstore1.png";
import smart from "../../assets/images/imgstore3.png";
import headPhone from "../../assets/images/imgstore5.png";
import watch from "../../assets/images/watch.png";
import { Container } from '../../global/components';
import MainProductCard from '../MainProductCard/MainProductCard';
import ShoppingGuide from '../ShoppingGuide/ShoppingGuide';
import { FourthFloorContainer, FourthFloorContainerBottom, FourthFloorContainerTop, FourthFloorWrapper } from './style';
const FourthFloor = () => {
    return (    <>
                    <Container>
                        <FourthFloorWrapper>
                            <ShoppingGuide title="Consumer electronics and gadgets" img={img}/>
                            <FourthFloorContainer>
                                <FourthFloorContainerTop>
                                    <MainProductCard title="Smart watches" price='19' img={watch}/>
                                    <MainProductCard title="Cameras" price='89' img={camera}/>
                                    <MainProductCard title="Headphones" price='19' img={headPhone}/>
                                    <MainProductCard title="Coffee keeper" price='19' img={gra}/>
                                </FourthFloorContainerTop>
                                <FourthFloorContainerBottom>
                                    <MainProductCard title="Gaming set" price='38' img={headphone2}/>
                                    <MainProductCard title="Laptops & PC" price='340' img={laptop}/>
                                    <MainProductCard title="Smartphones" price='39' img={smart}/>
                                    <MainProductCard title="CElectric kattle" price='240' img={iphone}/>
                                </FourthFloorContainerBottom>
                            </FourthFloorContainer>
                        </FourthFloorWrapper>
                    </Container>
                </>
    );
}

export default FourthFloor;
