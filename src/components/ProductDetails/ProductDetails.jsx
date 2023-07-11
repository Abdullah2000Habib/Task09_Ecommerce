import CheckIcon from '@mui/icons-material/Check';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import React from 'react';
import { ProductDetailsContainer, ProductDetailsFirstPrice, ProductDetailsGroup, ProductDetailsGroupContainer, ProductDetailsGroupContainerTitle, ProductDetailsGroupContainerValue, ProductDetailsPieces, ProductDetailsPrice, ProductDetailsPrices, ProductDetailsPricesItem, ProductDetailsStatus, ProductDetailsStatusName, ProductDetailsTitle, ProductDetailsWrapper, StorCardOrder, StorCardRate, StorCardScore, StorCardShipping, StorCardStars, StoreCardContainer } from './style';
const ProductDetails = ({star,rate,review,type,dot}) => {
    return (
        <ProductDetailsWrapper>
            <ProductDetailsStatus>
                <CheckIcon/>
                <ProductDetailsStatusName>In stock</ProductDetailsStatusName>
            </ProductDetailsStatus>
            <ProductDetailsTitle>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</ProductDetailsTitle>
            <StorCardRate>
                    <StoreCardContainer>
                        <StorCardStars>
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                        </StorCardStars>
                        <StorCardScore>{rate}</StorCardScore>
                    </StoreCardContainer>
                    <StoreCardContainer>
                        {dot}
                        <MessageOutlinedIcon className='productDetailsIcon'/>
                        <StorCardOrder>{review}</StorCardOrder>
                    </StoreCardContainer>
                    <StoreCardContainer>
                        {dot}
                        <ShoppingBasketOutlinedIcon className='productDetailsIcon'/>
                        <StorCardShipping>{type}</StorCardShipping>
                    </StoreCardContainer>
            </StorCardRate>
            <ProductDetailsPrices>
                <ProductDetailsPricesItem>
                    <ProductDetailsFirstPrice>$98.00</ProductDetailsFirstPrice>
                    <ProductDetailsPieces>50-100 pcs</ProductDetailsPieces>
                </ProductDetailsPricesItem>
                <ProductDetailsPricesItem>
                    <ProductDetailsPrice>$90.00</ProductDetailsPrice>
                    <ProductDetailsPieces>100-700 pcs</ProductDetailsPieces>
                </ProductDetailsPricesItem>
                <ProductDetailsPricesItem>
                    <ProductDetailsPrice>$78.00</ProductDetailsPrice>
                    <ProductDetailsPieces>700+ pcs</ProductDetailsPieces>
                </ProductDetailsPricesItem>
            </ProductDetailsPrices>
            <ProductDetailsContainer>
                <ProductDetailsGroup>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Price:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Negotiable</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                </ProductDetailsGroup>
                <ProductDetailsGroup>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Type:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Classic shoes</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Material:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Plastic material</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Design:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Modern nice</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                </ProductDetailsGroup>
                <ProductDetailsGroup>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Customization:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Customized logo and design custom packages</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Protection:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>Refund Policy</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                    <ProductDetailsGroupContainer>
                        <ProductDetailsGroupContainerTitle>Warranty:</ProductDetailsGroupContainerTitle>
                        <ProductDetailsGroupContainerValue>2 years full warranty</ProductDetailsGroupContainerValue>
                    </ProductDetailsGroupContainer>
                </ProductDetailsGroup>
            </ProductDetailsContainer>
        </ProductDetailsWrapper>
    );
}

export default ProductDetails;
