import styled from "@emotion/styled";

export const LikeItemsWrapper=styled('div')`
label:LikeItemsWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor1};
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius:6px;
padding:1rem;
display: flex;
flex-direction: column;
gap:1rem;
height: fit-content;


`
export const LikeItemsTitle=styled('h3')`
label:LikeItemsTitle;
font-weight: 600;
font-size:1.1rem;
color:${({theme})=>theme.pallet.blackColor};

`
export const LikeItemsContainer=styled('div')`
label:LikeItemsContainer;
display: flex;
flex-direction: column;
width:100%;
gap:1rem;
@media screen  and (max-width: 1130px){
flex-direction: row;
flex-wrap: wrap;
}

    /* @media screen  and (max-width: 280px){
        gap:0;
    } */

`
