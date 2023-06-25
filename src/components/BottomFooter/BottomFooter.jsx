import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import flag from "../../assets/images/us-flag.png";
import { Container } from '../../global/components';
import { BottomFooterBody, BottomFooterContainer, BottomFooterCopyRight, BottomFooterImg, BottomFooterLang, BottomFooterWrapper } from './Style';
const BottomFooter = () => {
    return (
        <BottomFooterBody>
            <Container>
                <BottomFooterWrapper>
                    <BottomFooterCopyRight>&copy; 2023 Ecommerce.</BottomFooterCopyRight>
                    <BottomFooterContainer>
                        <BottomFooterImg src={flag}/>
                        <BottomFooterLang>English</BottomFooterLang>
                        <KeyboardArrowUpIcon/>
                    </BottomFooterContainer>
                </BottomFooterWrapper>
            </Container>
        </BottomFooterBody>
    );
}

export default BottomFooter;
