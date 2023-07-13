import styled from "@emotion/styled";

export const CouponCardWrapper=styled('div')`
label:CouponCardWrapper;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
background-color: ${({theme})=>theme.pallet.whiteColor1};
border-radius: 5px;
display: flex;
flex-direction: column;
gap:0.5rem;
padding:1rem;
@media screen and (max-width: 1270px) {
order:1;
flex:1;
}

`
export const CouponCardTitle=styled('span')`
label:CouponCardTitle;
color: ${({theme})=>theme.pallet.greyColor4};
font-size:1.1rem;

`
export const CouponCardContainer=styled('div')`
label:CouponCardContainer;
display: flex;
align-items: center;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
overflow: hidden;
`
export const CouponCardInput=styled('input')`
label:CouponCardInput;
width:100%;
border:none;
outline: none;
padding:${({theme})=>theme.fontSizes.body}rem;
font-size:${({theme})=>theme.fontSizes.h4}rem;
background-color:white;
height: 100%;

`
export const CouponCardButton=styled('button')`
label:CouponCardButton;
width:fit-content;
padding: ${({theme})=>theme.fontSizes.body}rem;
padding-left: 1rem;
padding-right: 1rem;
cursor:pointer;
outline: none;
border:none;
background-color:white;
color: ${({theme})=>theme.pallet.blueColor};
font-size:1.1rem;
font-weight: 600;
border-left:1px solid ${({theme})=>theme.pallet.greyColor2};
transition: all 0.2s ease-in-out;
&:hover {
    background-color: ${({theme})=>theme.pallet.greyColor2};
}

`