import styled from "@emotion/styled";


export const RecommendedCardWrapper=styled('div')`
label:RecommendedCardWrapper;
flex:1 250px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
background-color: ${({theme})=>theme.pallet.whiteColor};
border-radius: 6px;
padding:1rem;
display: flex;
flex-direction: column;
gap:0.5rem;
cursor:pointer;
transition: 0.3s all linear;
&:hover{
    transform: scale(1.05);
}
@media screen and  (max-width:1285) {
    flex:none;
    width:48%;
}
`
export const RecommendedCardImg=styled('img')`
label:RecommendedCardImg;
width:150px;
align-self: center;
object-fit:cover;
`
export const RecommendedCardPrice=styled('span')`
label:RecommendedCardPrice;
font-weight:500;
`
export const RecommendedCardTitle=styled('span')`
label:RecommendedCardTitle;
color:${({theme})=>theme.pallet.greyColor};
width:70%;
`