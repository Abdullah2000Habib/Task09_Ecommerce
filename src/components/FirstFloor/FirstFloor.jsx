import { useTheme } from '@emotion/react';
import React from 'react';
import { Container } from '../../global/components';
import GreetingCard from '../GreetingCard/GreetingCard';
import OfferCard from '../OfferCard/OfferCard';
import ProductsLink from '../ProductsLink/ProductsLink';
import Trending from '../Trending/Trending';
import { FirstFloorCards, FirstFloorWrapper } from './style';

const FirstFloor = () => {
    const theme = useTheme();
    return (
        <Container>
            <FirstFloorWrapper>
                <ProductsLink/>
                <Trending/>
                <FirstFloorCards>
                    <GreetingCard/>
                    <OfferCard  title="Get US $10 off with a new supplier" textColor={theme.pallet.bgPrimary} bgColor={theme.pallet.orangeColor} />
                    <OfferCard  title="Send quotes with supplier preferences" textColor={theme.pallet.bgPrimary} bgColor={theme.pallet.blueColor7}/>
                </FirstFloorCards>
            </FirstFloorWrapper>
        </Container>
    );
}

export default FirstFloor;
