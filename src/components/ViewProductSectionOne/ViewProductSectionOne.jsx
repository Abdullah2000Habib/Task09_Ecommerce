import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import Gallery from '../Gallery/Gallery';
import ProductDetails from '../ProductDetails/ProductDetails';
import Supplier from '../Supplier/Supplier';
import { ViewProductSectionOneWrapper } from './style';
const ViewProductSectionOne = () => {
    return (
        <ViewProductSectionOneWrapper>
            <Gallery/>
            <ProductDetails rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} review="32 reviews" type="154 sold" />
            <Supplier/>
        </ViewProductSectionOneWrapper>
    );
}

export default ViewProductSectionOne;
