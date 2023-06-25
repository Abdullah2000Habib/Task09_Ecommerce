import React from 'react';
import apple from "../../assets/images/apple-store.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google-store.png";
import instegram from "../../assets/images/instegram.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import { Container } from '../../global/components';
import { TopFooterBody, TopFooterCenter, TopFooterCenterContainer, TopFooterCenterContainerItem, TopFooterLeft, TopFooterLeftDescription, TopFooterLeftImage, TopFooterLeftLogo, TopFooterLeftSocial, TopFooterRight, TopFooterRightImg, TopFooterTitle, TopFooterWrapper } from './Style';
const TopFooter = () => {
    return (
        <>
            <TopFooterBody>
                <Container>
                    <TopFooterWrapper>
                        <TopFooterLeft>
                            <TopFooterLeftLogo src={logo}/>
                            <TopFooterLeftDescription>Best information about the company gies here but now lorem ipsum is</TopFooterLeftDescription>
                            <TopFooterLeftSocial>
                                <TopFooterLeftImage src={facebook}/>
                                <TopFooterLeftImage src={twitter}/>
                                <TopFooterLeftImage src={linkedin}/>
                                <TopFooterLeftImage src={instegram}/>
                                <TopFooterLeftImage src={youtube}/>
                            </TopFooterLeftSocial>
                        </TopFooterLeft>
                        <TopFooterCenter>
                            <TopFooterCenterContainer>
                                <TopFooterTitle>About</TopFooterTitle>
                                <TopFooterCenterContainerItem>About Us</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Find store</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Categories</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Blogs</TopFooterCenterContainerItem>
                            </TopFooterCenterContainer>
                            <TopFooterCenterContainer>
                                <TopFooterTitle>Partnership</TopFooterTitle>
                                <TopFooterCenterContainerItem>About Us</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Find store</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Categories</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Blogs</TopFooterCenterContainerItem>
                            </TopFooterCenterContainer>
                            <TopFooterCenterContainer>
                                <TopFooterTitle>Information</TopFooterTitle>
                                <TopFooterCenterContainerItem>Help Center</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Money Refund</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Shipping</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Contact us</TopFooterCenterContainerItem>
                            </TopFooterCenterContainer>
                            <TopFooterCenterContainer>
                                <TopFooterTitle>For users</TopFooterTitle>
                                <TopFooterCenterContainerItem>Login</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Register</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>Settings</TopFooterCenterContainerItem>
                                <TopFooterCenterContainerItem>My Orders</TopFooterCenterContainerItem>
                            </TopFooterCenterContainer>
                        </TopFooterCenter>
                        <TopFooterRight>
                            <TopFooterTitle>Get app</TopFooterTitle>
                            <TopFooterRightImg src={apple}/>
                            <TopFooterRightImg src={google}/>
                        </TopFooterRight>
                    </TopFooterWrapper>
                </Container>
            </TopFooterBody>
        </>
    );
}

export default TopFooter;
