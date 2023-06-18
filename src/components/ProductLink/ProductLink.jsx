import React from 'react';
import { Link } from 'react-router-dom';
import { ProductLinkWrapper } from './style';

const ProductLink = ({title}) => {
    return (
        <ProductLinkWrapper>
            <Link to="#" className='ProductLinkStyle'>{title}</Link>
        </ProductLinkWrapper>
    );
}

export default ProductLink;
