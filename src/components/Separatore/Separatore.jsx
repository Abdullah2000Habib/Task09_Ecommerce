import React from 'react';
import { SeparatorTitle, SeparatoreWrapper } from './style';

const Separatore= ({title}) => {
    return (
        <>
            <SeparatoreWrapper>
                {title?<SeparatorTitle>{title}</SeparatorTitle>:''}
            </SeparatoreWrapper>
        </>
    );
}

export default Separatore;
