import styled from "@emotion/styled";

export const ViewProductSectionOneWrapper=styled('div')`
label:ViewProductSectionOneWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor};
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
padding:1rem;
display: flex;
gap:1rem;
    @media screen and (max-width: 1429px){
        flex-direction: column;
    }
`