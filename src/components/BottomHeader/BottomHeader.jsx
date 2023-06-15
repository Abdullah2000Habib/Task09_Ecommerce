import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import flag from "../../assets/images/flag.png";
import { Container } from '../../global/components';
import { BottomHeaderBody, BottomHeaderSpan, BottomHeaderWrapper, BottomHeaderWrapperLeft, BottomHeaderWrapperLeftLinks, BottomHeaderWrapperRight, Country, FlagImage, Option, Selector } from './style';
const BottomHeader = () => {
    return (
        <>
            <BottomHeaderBody>
                <Container>
                    <BottomHeaderWrapper>
                        <BottomHeaderWrapperLeft>
                            <MenuIcon/>
                            <BottomHeaderWrapperLeftLinks>
                                <BottomHeaderSpan>All category</BottomHeaderSpan>
                                <BottomHeaderSpan>Hot offers</BottomHeaderSpan>
                                <BottomHeaderSpan>Gift boxes</BottomHeaderSpan>
                                <BottomHeaderSpan>Projects</BottomHeaderSpan>
                                <BottomHeaderSpan>Menu item</BottomHeaderSpan>
                                <Selector>
                                    <Option>Help</Option>
                                    <Option>UZ +997</Option>
                                    <Option>UN +967</Option>
                                </Selector>
                            </BottomHeaderWrapperLeftLinks>
                        </BottomHeaderWrapperLeft>
                        <BottomHeaderWrapperRight>
                            <Selector>
                                <Option> English,USD</Option>
                                <Option>UZ +997</Option>
                                <Option>UN +967</Option>
                            </Selector>
                            <Country>
                                <BottomHeaderSpan>Ship to</BottomHeaderSpan>
                                <FlagImage src={flag}/>
                                <KeyboardArrowDownIcon/>
                            </Country>
                        </BottomHeaderWrapperRight>
                    </BottomHeaderWrapper>
                </Container>
            </BottomHeaderBody>
        </>
    );
}

export default BottomHeader;
