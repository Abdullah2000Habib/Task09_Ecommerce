import styled from "@emotion/styled";

export const SecondaryFooterWrapper = styled('div')`
label:SecondaryFooterWrapper;
padding:1.2rem;
width:100%;
background-color: ${({theme})=>theme.pallet.whiteColor};
`

export const SecondaryFooterContainer = styled('div')`
label:SecondaryFooterContainer;

display: flex;
justify-content: space-between;
align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    }
`

export const SecondaryFooterLeft = styled('div')`
label:SecondaryFooterLeft;
display: flex;
flex-wrap: wrap;
justify-content:flex-start;
align-items: center;
gap:1rem;`

export const SecondaryFooterImg = styled('img')`
label:SecondaryFooterImg;
cursor:pointer;`


export const SecondaryFooterRight = styled('div')`
label:SecondaryFooterRight;
flex-wrap: wrap;
display: flex;
align-items: center;
gap:1rem;

&>*{
 color: ${({theme})=>theme.pallet.greyColor};
font-size: ${({theme})=>theme.fontSizes.body1}rem;

    @media (max-width: 768px) {
font-size: ${({theme})=>theme.fontSizes.body}rem;
    }
}



`