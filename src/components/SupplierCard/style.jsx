import styled from "@emotion/styled";

export const SupplierCardWrapper=styled('div')`
label:SupplierCardWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor};
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
padding:1.5rem;
display: flex;
flex-direction:column;
gap:1rem;
`
export const SupplierCardHeading=styled('div')`
label:SupplierCardHeading;
display: flex;
gap:0.5rem;
align-items: center;
padding-bottom: 1.5rem;
border-bottom: 1px solid ${({theme})=>theme.pallet.greyColor2};
@media screen and (max-width: 280px){
    flex-direction: column;
    align-items: flex-start;
}
`
export const SupplierCardImg=styled('img')`
label:SupplierCardImg;
`
export const SupplierCardHeadingRight=styled('div')`
label:SupplierCardHeadingRight;
display: flex;
flex-direction: column;
gap:0.5rem;
`
export const SupplierCardTitle=styled('span')`
label:SupplierCardTitle;
color: ${({theme})=>theme.pallet.greyColor6};
font-size: 1.1rem;
`
export const SupplierCardDetails=styled('div')`
label:SupplierCardDetails;
display: flex;
flex-direction: column;
gap: 1.1rem;
padding-bottom:1.5rem;
`
export const SupplierCardItem=styled('div')`
label:SupplierCardItem;
display: flex;
align-items: center;
gap:1rem;
&>svg {
    color: ${({theme})=>theme.pallet.greyColor};
}
@media screen and (max-width: 280px){
    gap:0.5rem;
&>svg {
    font-size: 1.7rem;
}
&>* {
    width:25px;
}
}

`
export const SupplierCardItemImg=styled('img')`
label:SupplierCardItemImg;

`
export const SupplierCardItemTitle=styled('span')`
label:SupplierCardItemTitle;
color: ${({theme})=>theme.pallet.greyColor};
font-size: 1.1rem;
`
export const SupplierCardButtons=styled('div')`
label:SupplierCardButtons;
display: flex;
flex-direction: column;
gap:0.5rem;


&>button {
    box-shadow: none;
    border: 1px solid ${({theme})=>theme.pallet.greyColor2};
    padding:0.5rem 0;
    font-weight: 500;
    font-size: 1.3rem;
}

&>:last-child {
    color:  ${({theme})=>theme.pallet.blueColor};
}

@media screen and (max-width: 280px){
    

&>button {
    box-shadow: none;
    border: 1px solid ${({theme})=>theme.pallet.greyColor2};
    padding:0.5rem 0;
    font-weight: 400;
    font-size: 1rem;
}
}
`
