import React from 'react';
import { OfferCardWrapper } from './style';

const OfferCard = ({title,textColor,bgColor}) => {
    return (
        <>
            <OfferCardWrapper textColor={textColor} bgColor={bgColor}>
                {title}
            </OfferCardWrapper>
        </>
    );
}

export default OfferCard;
