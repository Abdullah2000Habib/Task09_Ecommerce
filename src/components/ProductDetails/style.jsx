import styled from "@emotion/styled";


export const ProductDetailsWrapper=styled('div')`
label:ProductDetailsWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor1};
display: flex;
flex-direction: column;
gap:0.5rem;
width:35%;
flex:1;
    @media screen and (max-width: 1429px){
        width:100%;
    }
`
export const ProductDetailsStatus=styled('div')`
label:ProductDetailsStatus;
color: ${({theme})=>theme.pallet.greenColor};
display: flex;
align-items: center;
gap:0.5rem;
`
export const ProductDetailsStatusName=styled('span')`
label:ProductDetailsStatusName;
font-size: 1.1rem;

`
export const ProductDetailsTitle=styled('h3')`
label:ProductDetailsTitle;
font-size: 1.4rem;
font-weight: 600;
color: ${({theme})=>theme.pallet.blackColor};
`


export const StorCardRate=styled('div')`
label:StorCardRate;
display: flex;
align-items: center;
gap:0.5rem;
color:orange;



@media screen  and (max-width:1350px){
    padding:0.5rem 0;
}

@media screen  and (max-width:1000px){
    flex-wrap: wrap;
    padding:0.5rem 0;
}


`
export const StorCardStars=styled('div')`
label:StorCardStars;
&>svg {
    font-size:25px;
}
&>svg:not(:last-child) {
    color:orange;
}
&>svg:last-child{
    color:${({theme})=>theme.pallet.greyColor};
}
`
export const StorCardScore=styled('span')`
label:StorCardScore;
font-size:1.1rem;
font-weight: 500;
`
export const StorCardOrder=styled('span')`
label:StorCardOrder;
    color:${({theme})=>theme.pallet.greyColor};
    font-size:1.1rem;
`
export const StorCardShipping=styled('span')`
label:StorCardShipping;
    color:${({theme})=>theme.pallet.greyColor};
        font-size:1.1rem;
`


export const StoreCardContainer=styled('div')`
label:StoreCardContainer;
display: flex;
align-items: center;
gap:0.5rem;

&>svg{
    color:${({theme})=>theme.pallet.greyColor};
    font-size: 15px;
}

.productDetailsIcon{
    color:${({theme})=>theme.pallet.greyColor};
    font-size: 30px;
}
`
export const ProductDetailsPrices=styled('div')`
label:ProductDetailsPrices;
background-color:${({theme})=>theme.pallet.redColor1};
display: flex;
align-items: center;
padding:1rem;
gap: 0.5rem;

&>:last-child{
    border:none;
}
    @media screen and (max-width: 780px){
        flex-direction: column;
        align-items: flex-start;
        gap:1rem;
        &>*{
        padding-bottom:1rem;
        width:100%;
        border:none;
        border-bottom:1px solid ${({theme})=>theme.pallet.greyColor};
        }
    }
`
export const ProductDetailsPricesItem=styled('div')`
label:ProductDetailsPricesItem;
display: flex;
flex-direction: column;
gap:0.5rem;
padding-right:3rem;
border-right: 2px solid ${({theme})=>theme.pallet.greyColor};

@media screen and (max-width: 780px){
        padding-bottom:1rem;
        width:100%;
        border-right:none;
        border-bottom:1px solid ${({theme})=>theme.pallet.greyColor};
}
`
export const ProductDetailsFirstPrice=styled('span')`
label:ProductDetailsFirstPrice;
font-size:1.4rem;
font-weight: 600;
color:${({theme})=>theme.pallet.redColor};
`
export const ProductDetailsPieces=styled('span')`
label:ProductDetailsPieces;
color:${({theme})=>theme.pallet.greyColor4};
font-size:0.9rem;
font-weight: 500;
`
export const ProductDetailsPrice=styled('div')`
label:ProductDetailsPrice;
font-size:1.4rem;
font-weight: 600;
color:${({theme})=>theme.pallet.blackColor};
`
export const ProductDetailsContainer=styled('div')`
label:ProductDetailsContainer;
display: flex;
flex-direction: column;
gap:0.5rem;
background-color: ${({theme})=>theme.pallet.whiteColor1};
`
export const ProductDetailsGroup=styled('div')`
label:ProductDetailsGroup;
display: flex;
flex-direction: column;
gap:1.5rem;
padding:1rem;
border-bottom: 1px solid ${({theme})=>theme.pallet.greyColor2};
`
export const ProductDetailsGroupContainer=styled('div')`
label:ProductDetailsGroupContainer;
display: flex;
align-items: center;
gap:2rem;
font-size:1.2rem;
@media screen and (max-width: 780px){
    flex-direction: column;
    align-items: flex-start;
    gap:1rem;
}



`
export const ProductDetailsGroupContainerTitle=styled('span')`
label:ProductDetailsGroupContainerTitle;
width:120px;
color:${({theme})=>theme.pallet.blackColor};

`

export const ProductDetailsGroupContainerValue=styled('span')`
label:ProductDetailsGroupContainerValue;
color:${({theme})=>theme.pallet.greyColor};
`
