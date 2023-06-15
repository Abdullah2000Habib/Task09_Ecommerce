import React from 'react';
import logo from "../../assets/images/logo.png";
import { Container } from '../../global/components';
import IconsHeader from '../IconsHeader/IconsHeader';
import SearchBox from '../SearchBox/SearchBox';
import { TopHeaderBody, TopHeaderImage, TopHeaderWrapper } from './style';

const TopHeader = () => {
    return (
        <>  <TopHeaderBody>
                <Container>
                    <TopHeaderWrapper>
                        <TopHeaderImage src={logo}/>
                        <SearchBox/>
                        <IconsHeader/>
                    </TopHeaderWrapper>
                </Container>
            </TopHeaderBody>
        </>
    );
}

export default TopHeader;
