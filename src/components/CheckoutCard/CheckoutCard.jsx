import React from 'react';
import amercan from "../../assets/images/amercan.png";
import express from "../../assets/images/express.png";
import payment from "../../assets/images/payment.png";
import pay from "../../assets/images/payment2.png";
import visa from "../../assets/images/visa.png";
import { CheckoutCardCheckoutButton, CheckoutCardContainer, CheckoutCardDiscount, CheckoutCardPayment, CheckoutCardSubtotal, CheckoutCardTax, CheckoutCardTitle, CheckoutCardTotal, CheckoutCardTotalPrice, CheckoutCardWrapper, PaymentMethod, PaymentMethodImg } from './style';
const CheckoutCard = () => {
    return (
        <CheckoutCardWrapper>
            <CheckoutCardContainer>
                <CheckoutCardPayment>
                    <CheckoutCardTitle>Subtotal:</CheckoutCardTitle>
                    <CheckoutCardSubtotal>$1403.97</CheckoutCardSubtotal>
                </CheckoutCardPayment>
                <CheckoutCardPayment>
                    <CheckoutCardTitle>Discount:</CheckoutCardTitle>
                    <CheckoutCardDiscount>- $60.00</CheckoutCardDiscount>
                </CheckoutCardPayment>
                <CheckoutCardPayment>
                    <CheckoutCardTitle>Tax:</CheckoutCardTitle>
                    <CheckoutCardTax>+ $14.00</CheckoutCardTax>
                </CheckoutCardPayment>
                <CheckoutCardPayment>
                    <CheckoutCardTotal>Total:</CheckoutCardTotal>
                    <CheckoutCardTotalPrice>$1357.97</CheckoutCardTotalPrice>
                </CheckoutCardPayment>
            </CheckoutCardContainer>
            <CheckoutCardCheckoutButton>Checkout</CheckoutCardCheckoutButton>
            <PaymentMethod>
                <PaymentMethodImg src={amercan}/>
                <PaymentMethodImg src={express}/>
                <PaymentMethodImg src={visa}/>
                <PaymentMethodImg src={payment}/>
                <PaymentMethodImg src={pay}/>
            </PaymentMethod>
        </CheckoutCardWrapper>
    );
}

export default CheckoutCard;
