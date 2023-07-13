import styled from "@emotion/styled";

export const CheckoutCardWrapper=styled('div')`
label:CheckoutCardWrapper;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
background-color: ${({theme})=>theme.pallet.whiteColor1};
border-radius: 5px;
display: flex;
flex-direction: column;
gap:0.5rem;
padding:1rem;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

@media screen and (max-width: 1270px) {
order:0;
flex:1;
}
@media screen and (max-width: 750px) {
flex:none;
width:100%;
}

`
export const CheckoutCardContainer=styled('div')`
label:CheckoutCardContainer;
display: flex;
flex-direction: column;
gap:1rem;
`
export const CheckoutCardPayment=styled('div')`
label:CheckoutCardPayment;
display: flex;
align-items: center;
justify-content: space-between;
`
export const CheckoutCardTitle=styled('span')`
label:CheckoutCardTitle;
color: ${({theme})=>theme.pallet.greyColor4};
font-size:1.2rem;
`
export const CheckoutCardSubtotal=styled('span')`
label:CheckoutCardSubtotal;
color: ${({theme})=>theme.pallet.greyColor4};
font-size:1.2rem;
`
export const CheckoutCardDiscount=styled('span')`
label:CheckoutCardDiscount;
color: ${({theme})=>theme.pallet.redColor};
font-size:1.2rem;
`
export const CheckoutCardTax=styled('span')`
label:CheckoutCardTax;
color: ${({theme})=>theme.pallet.greenColor};
font-size:1.2rem;
`
export const CheckoutCardTotal=styled('span')`
label:CheckoutCardTotal;
color: ${({theme})=>theme.pallet.blackColor};
font-size:1.2rem;
font-weight: 600;
`
export const CheckoutCardTotalPrice=styled('span')`
label:CheckoutCardTotalPrice;
color: ${({theme})=>theme.pallet.blackColor};
font-size:1.3rem;
font-weight: bold;
`

export const CheckoutCardCheckoutButton=styled('button')`
label:CheckoutCardCheckoutButton;
width:100%;
padding: 1.2rem;
margin-top: 1.5rem;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
background-color: ${({theme})=>theme.pallet.greenColor};
color: white;
font-size:1.3rem;
font-weight: 500;
transition: all 0.2s ease-in-out;
&:hover {
    background-color: ${({theme})=>theme.pallet.greenColor1};
}

`


export const PaymentMethod = styled('div')`
label:PaymentMethod;
align-self: center;
display: flex;
flex-wrap: wrap;
justify-content:flex-start;
align-items: center;
gap:1rem;
margin-top: 1rem;
`

export const PaymentMethodImg = styled('img')`
label:PaymentMethodImg;
cursor:pointer;`
