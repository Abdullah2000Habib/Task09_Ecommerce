import React from 'react';
import { IconHeaderImage, IconHeaderTitle, IconHeaderWrapper } from './style';

const IconHeader = ({img,title}) => {
    return (
        <IconHeaderWrapper>
            <IconHeaderImage src={img} alt="img"/>
            <IconHeaderTitle>{title}</IconHeaderTitle>
        </IconHeaderWrapper>
    );
}

export default IconHeader;
