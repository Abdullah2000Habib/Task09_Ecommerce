import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import SupplierCard from '../SupplierCard/SupplierCard';
import { SupplierContainer, SupplierTitle, SupplierWrapper } from './style';
const Supplier = () => {
    return (
        <SupplierWrapper>
            <SupplierCard/>
            <SupplierContainer>
                <FavoriteBorderOutlinedIcon/>
                <SupplierTitle>Save for later</SupplierTitle>
            </SupplierContainer>
        </SupplierWrapper>
    );
}

export default Supplier;
