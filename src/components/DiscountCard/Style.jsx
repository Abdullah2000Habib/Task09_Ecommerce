import styled from "@emotion/styled";


export const DiscountCardWrapper=styled('div')`
label:DiscountCardWrapper;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius:6px;
background-color:${({theme})=>theme.pallet.whiteColor};
display: flex;
flex-direction:column;
gap:0.5rem;
align-items: flex-start;
flex:1 350px;
@media screen  and (max-width:612px){
    flex:none;
    width:100%;
}
`
export const DiscountCardImg=styled('img')`
label:DiscountCardWrapper;
object-fit: contain;
align-self: center;
padding:2rem;
width:260px;
height: 260px;
`
export const DiscountCardContainer=styled('div')`
label:DiscountCardContainer;
border-top: 1px solid ${({theme})=>theme.pallet.greyColor2};
padding:1rem;
display: flex;
flex-direction: column;
gap:0.5rem;
width:100%;
`
export const DiscountCardDetails=styled('div')`
label:DiscountCardDetails;
display: flex;
justify-content: space-between;
@media screen  and (max-width:280px){
    flex-direction:column;
    gap:0.5rem;
}
`
export const DiscountCardPrice=styled('div')`
label:DiscountCardPrice;
display: flex;
align-items: center;
gap:0.5rem;
`
export const DiscountCardNewPrice=styled('span')`
label:DiscountCardNewPrice;
font-weight: 600;
font-size:1.5rem;
`
export const DiscountCardOldPrice=styled('span')`
label:DiscountCardOldPrice;
color:${({theme})=>theme.pallet.greyColor};
padding-top: 3px;
font-weight: bold;
font-size:1.1rem;
text-decoration:line-through  2px solid;
`
export const DiscountCardReact=styled('div')`
label:DiscountCardReact;
padding:0.5rem;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
color:${({theme})=>theme.pallet.blueColor};
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
&>svg {
    font-size:30px;
}
@media screen  and (max-width:280px){
    width:fit-content;
    padding:0.2rem;
}
`
export const DiscountCardRate=styled('div')`
label:DiscountCardRate;
display: flex;
align-items: center;
gap:0.5rem;
color:orange;
`
export const DiscountCardStars=styled('div')`
label:DiscountCardStars;
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
export const DiscountCardScore=styled('span')`
label:DiscountCardScore;
font-size:1.1rem;
font-weight: 500;
`
export const DiscountCardDescription=styled('span')`
label:DiscountCardDescription;
color:${({theme})=>theme.pallet.greyColor6};
font-size:1.1rem;
padding-bottom:2rem;
`
