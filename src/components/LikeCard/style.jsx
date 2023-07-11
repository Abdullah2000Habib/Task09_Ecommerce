import styled from "@emotion/styled";

export const LikeCardWrapper=styled('div')`
label:LikeCardWrapper;
display: flex;
gap:0.5rem;
cursor:pointer;
    @media screen  and (max-width: 280px){
        flex-direction:column;
    }
`
export const LikeCardImg=styled('img')`
label:LikeCardImg;
object-fit: cover;
padding:0.7rem  ;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius:6px;
background-color: ${({theme})=>theme.pallet.WhiteColor};
    @media screen  and (max-width: 280px){
        width:100%;
        align-self: center;
        object-fit: cover;
        padding: 2.5rem;
    }

`
export const LikeCardContainer=styled('div')`
label:LikeCardContainer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
width:200px;
`
export const LikeCardTitle=styled('span')`
label:LikeCardTitle;
color: ${({theme})=>theme.pallet.greyColor6};
font-size: 1.1rem;
line-height: 1.5;
font-weight: 500;
`
export const LikeCardPrice=styled('span')`
label:LikeCardPrice;
color: ${({theme})=>theme.pallet.greyColor};
font-size: 1.1rem;
font-weight: 500;
`