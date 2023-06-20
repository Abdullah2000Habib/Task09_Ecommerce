import styled from "@emotion/styled";

export const OffersWrapper=styled('div')`
label:OffersWrapper;
padding:1rem;
padding-right: 5rem;
display: flex;
flex-direction: column;
border-right:1px solid ${({theme})=>theme.pallet.greyColor2};

@media screen and (max-width:1220px){
    width:100%;
    padding:1rem 0;
    align-items: center;
    border-bottom:1px solid ${({theme})=>theme.pallet.greyColor2};
}
`

export const OffersTitle=styled('h2')`
label:OffersTitle;
font-size: 1.2rem;
font-weight: 600;
`

export const OffersDetails=styled('span')`
label:OffersDetails;
font-size: 1rem;
color:${({theme})=>theme.pallet.greyColor};
`

export const TimeCeils=styled('div')`
label:TimeCeils;
margin-top: 1.5rem;
display: flex;
align-items: center;
gap: 0.7rem;
`