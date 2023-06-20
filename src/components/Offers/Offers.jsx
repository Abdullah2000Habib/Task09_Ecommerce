import React from 'react';
import TimeCeil from '../TimeCeil/TimeCeil';
import { OffersDetails, OffersTitle, OffersWrapper, TimeCeils } from './style';

const Offers = () => {
    return (
        <OffersWrapper>
            <OffersTitle>Deals and offers</OffersTitle>
            <OffersDetails>Hygiene equipments</OffersDetails>
            <TimeCeils>
                <TimeCeil num="12" unit="days"/>
                <TimeCeil num="13" unit="Hour"/>
                <TimeCeil num="34" unit="Min"/>
                <TimeCeil num="56" unit="Sec"/>
            </TimeCeils>
        </OffersWrapper>
    );
}

export default Offers;
