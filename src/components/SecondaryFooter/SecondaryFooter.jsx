import React from 'react';
import { Link } from 'react-router-dom';
import amercan from "../../assets/images/amercan.png";
import express from "../../assets/images/express.png";
import payment from "../../assets/images/payment.png";
import visa from "../../assets/images/visa.png";
import { PATH } from '../../constants';
import { Container } from '../../global/components';
import { SecondaryFooterContainer, SecondaryFooterImg, SecondaryFooterLeft, SecondaryFooterRight, SecondaryFooterWrapper } from './style';

const SecondaryFooter = () => {
    return (
        <>
            <SecondaryFooterWrapper>
                <Container>
                    <SecondaryFooterContainer>
                        <SecondaryFooterLeft>
                            <SecondaryFooterImg src={amercan}/>
                            <SecondaryFooterImg src={express}/>
                            <SecondaryFooterImg src={visa}/>
                            <SecondaryFooterImg src={payment}/>
                        </SecondaryFooterLeft>
                        <SecondaryFooterRight>
                            <Link to={PATH.LOGIN}>Support</Link>
                            <Link to={PATH.LOGIN}>Privacy & Cookies</Link>
                            <Link to={PATH.LOGIN}>Accessibility</Link>
                        </SecondaryFooterRight>
                    </SecondaryFooterContainer>
                </Container>
                
            </SecondaryFooterWrapper>
        </>
    );
}

export default SecondaryFooter;
