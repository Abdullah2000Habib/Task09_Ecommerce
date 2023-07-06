import styled from "@emotion/styled";

export const CartCardWrapper=styled('div')`
label:CartCardWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor};
display: flex;
justify-content:space-between;
padding:1rem 0; 
border-bottom: 1px solid ${({theme})=>theme.pallet.greyColor2};
@media screen and (max-width: 792px) {
    flex-direction: column;
}
/* @media screen and (max-width: 500px) {
align-items: center;
} */
`

export const CartCardLeft=styled('div')`
label:CartCardLeft;
display: flex;
gap:0.5rem;
@media screen and (max-width: 792px) {
    flex-direction: column;
    gap:1rem;
    margin-bottom:1rem;
}
/* @media screen and (max-width: 500px) {
align-items: center;
} */


`

export const CartCardImg=styled('img')`
label:CartCardImg;
width:90px;
height: 90px;
padding: 0.5rem;
background-color: ${({theme})=>theme.pallet.greyColor3};
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
object-fit:contain;
`

export const CartCardLeftContainer=styled('div')`
label:CartCardLeftContainer;
display:flex;
flex-direction: column;
gap:0.5rem;
@media screen and (max-width: 500px) {
align-items: center;
}
`

export const CartCardTitle=styled('h3')`
label:CartCardTitle;
font-weight: 500;
font-size: 1.1rem;
@media screen and (max-width: 500px) {
width: 100%;
}
`

export const CartCardDetails=styled('span')`
label:CartCardDetails;
color:${({theme})=>theme.pallet.greyColor4};
width: 355px;
font-size:1.1rem;
font-weight:400;
line-height:1.6rem;
@media screen and (max-width: 500px) {
width: 100%;
}
`

export const CartCardButtons=styled('div')`
label:CartCardButtons;
display: flex;
gap:0.5rem;
padding: 0.3rem 0 ;
@media screen and (max-width: 500px) {
    align-self: flex-start;
}
@media screen and (max-width: 280px) {
    flex-direction: column;

}
`

export const CartCardRemoveBtn=styled('button')`
label:CartCardRemoveBtn;
width:fit-content;
padding: ${({theme})=>theme.fontSizes.body}rem;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
background-color:${({theme})=>theme.pallet.whiteColor};
color:${({theme})=>theme.pallet.redColor};
font-size:1rem;
font-weight:500;
transition: all 0.2s ease-in-out;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
padding:0.5rem 1rem;
&:hover {
    background-color:${({theme})=>theme.pallet.greyColor2};
}
`
export const CartCardSaveBtn=styled('button')`
label:CartCardSaveBtn;
width:fit-content;
padding: ${({theme})=>theme.fontSizes.body}rem;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
background-color:${({theme})=>theme.pallet.whiteColor};
color:${({theme})=>theme.pallet.blueColor};
font-size:1rem;
font-weight:500;
transition: all 0.2s ease-in-out;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
padding:0.5rem 1rem;
&:hover {
    background-color:${({theme})=>theme.pallet.greyColor2};
}
`
export const CartCardRight=styled('div')`
label:CartCardRight;
display: flex;
flex-direction: column;
gap:1rem;
align-items: flex-end;
@media screen and (max-width: 792px) {
    align-items: flex-start;
    gap:0.5rem;
}
`
export const CartCardPrice=styled('span')`
label:CartCardPrice;
font-size: 1.1rem;
font-weight: 500;
`

export const CartCardCounts =styled('select')`
label:CartCardCounts;
width: 120px;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
cursor:pointer;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`
export const CartCardCount =styled('option')`
label:CartCardCount;

`