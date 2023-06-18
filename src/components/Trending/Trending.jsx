import React from 'react';
import Banner from "../../assets/images/Banner.png";
import { TrendingButton, TrendingContainer, TrendingImg, TrendingSpan, TrendingTitle, TrendingWrapper } from './style';
const Trending = () => {
    return (
        <TrendingWrapper>
            <TrendingImg src={Banner} alt="img"/>
            <TrendingContainer>
                <TrendingSpan>Last trending</TrendingSpan>
                <TrendingTitle>Electronic items</TrendingTitle>
                <TrendingButton>Learn More</TrendingButton>
            </TrendingContainer>
        </TrendingWrapper>
    );
}

export default Trending;
