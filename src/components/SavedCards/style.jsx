import styled from "@emotion/styled";


export const SavedCardsWrapper=styled('div')`
label:SavedCardsWrapper;
background-color:${({theme})=>theme.pallet.whiteColor};
padding:1.5rem;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
display: flex;
flex-direction: column;
gap: 1.5rem;
`
export const SavedCardsTitle=styled('h3')`
label:SavedCardsTitle;
font-size: 1.6rem;
font-weight: 600;
`
export const SavedCardsContainer=styled('div')`
label:SavedCardsContainer;
display: flex;
justify-content: space-between;
gap:1.3rem;
flex-wrap:wrap;

`
