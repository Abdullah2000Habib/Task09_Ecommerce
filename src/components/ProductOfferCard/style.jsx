import styled from "@emotion/styled";

export const ProductOfferCardWrapper=styled('div')`
label:ProductOfferCardWrapper;
flex:1;
padding: 1rem 0;
display:flex;
flex-direction: column;
align-items: center;
gap:0.5rem;
cursor: pointer;
border-right:1px solid ${({theme})=>theme.pallet.greyColor2};
transition: all 0.3s;

&:hover{
    &>img{
        transform: scale(1.1)
    }
}

@media screen and (max-width:1220px){
    flex:none;
    width:20%;
}
@media screen and (max-width:800px){
    flex:none;
    width:50%;
    border-bottom:1px solid ${({theme})=>theme.pallet.greyColor2};
}
@media screen and (max-width:400px){
    flex:none;
    width:100%;
    border-bottom:1px solid ${({theme})=>theme.pallet.greyColor2};
}

`

export const ProductOfferCardImg=styled('img')`
label:ProductOfferCardImg;
transition: all 0.4s;
width: 115px;
height: 115px;
object-fit:contain;


`

export const ProductOfferCardTitle=styled('span')`
label:ProductOfferCardWrapper;
margin-top: 0.5rem;
color: ${({theme})=>theme.pallet.blackColor};
`

export const ProductOfferCardDiscount=styled('span')`
label:ProductOfferCardDiscount;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({theme})=>theme.pallet.redColor1};
color: ${({theme})=>theme.pallet.redColor};
padding:0.3rem  1rem;
border-radius: 5rem;
font-weight: 500;
`