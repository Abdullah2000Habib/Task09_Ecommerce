import React from 'react';
import Details from '../Details/Details';
import LikeItems from '../LikeItems/LikeItems';
import { ViewProductSectionTwoWrapper } from './style';

const ViewProductSectionTwo = () => {
    return (
        <ViewProductSectionTwoWrapper>
                <Details/>
                <LikeItems/>
        </ViewProductSectionTwoWrapper>
    );
}

export default ViewProductSectionTwo;
