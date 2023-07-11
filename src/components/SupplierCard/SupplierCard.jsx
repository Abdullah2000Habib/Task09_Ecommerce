import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import React from 'react';
import img from "../../assets/images/Supplier.png";
import flag from "../../assets/images/flag.png";
import MainButton from '../MainButton/MainButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { SupplierCardButtons, SupplierCardDetails, SupplierCardHeading, SupplierCardHeadingRight, SupplierCardImg, SupplierCardItem, SupplierCardItemImg, SupplierCardItemTitle, SupplierCardTitle, SupplierCardWrapper } from './style';
const SupplierCard = () => {
    return (
        <SupplierCardWrapper>
            <SupplierCardHeading>
                <SupplierCardImg src={img}/>
                <SupplierCardHeadingRight>
                    <SupplierCardTitle>Supplier</SupplierCardTitle>
                    <SupplierCardTitle> Guanjoi Trading LLC</SupplierCardTitle>
                </SupplierCardHeadingRight>
            </SupplierCardHeading>
            <SupplierCardDetails>
                <SupplierCardItem>
                    <SupplierCardItemImg src={flag}/>
                    <SupplierCardItemTitle>Germany, Berlin</SupplierCardItemTitle>
                </SupplierCardItem>
                <SupplierCardItem>
                    <VerifiedUserOutlinedIcon/>
                    <SupplierCardItemTitle>Verified Seller</SupplierCardItemTitle>
                </SupplierCardItem>
                <SupplierCardItem>
                    <LanguageOutlinedIcon/>
                    <SupplierCardItemTitle>Worldwide shipping</SupplierCardItemTitle>
                </SupplierCardItem>
            </SupplierCardDetails>
            <SupplierCardButtons>
                <MainButton name='Send inquiry'/>
                <SecondaryButton  title='Seller’s profile' brand='google'/>
            </SupplierCardButtons>
        </SupplierCardWrapper>
    );
}

export default SupplierCard;
