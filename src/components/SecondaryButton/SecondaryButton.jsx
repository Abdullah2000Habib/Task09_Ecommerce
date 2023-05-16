import React from 'react';
import { SecondaryButtonImg, SecondaryButtonWrapper } from './style';
const SecondaryButton = ({title ,img,brand}) => {
    return (
        <>
            <SecondaryButtonWrapper color={brand}>
                <SecondaryButtonImg src={img}/>
                {title}
            </SecondaryButtonWrapper>
        </>
    );
}

export default SecondaryButton;
