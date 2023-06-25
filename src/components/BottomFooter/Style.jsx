import styled from "@emotion/styled";

export const BottomFooterBody=styled('div')`
label:BottomFooterBody;
background-color: ${({theme})=>theme.pallet.greyColor2};
padding: 2rem 0;
`
export const BottomFooterWrapper=styled('div')`
label:BottomFooterWrapper;
display: flex;
align-items: center;
justify-content:space-between;
flex-wrap: wrap;
gap:1rem;

`
export const BottomFooterCopyRight=styled('span')`
label:BottomFooterCopyRight;
color: ${({theme})=>theme.pallet.greyColor6};
font-size: 1.2rem;
`
export const BottomFooterContainer=styled('div')`
label:BottomFooterContainer;
display: flex;
align-items: center;
gap:0.3rem;
cursor: pointer;
`
export const BottomFooterImg=styled('img')`
label:BottomFooterImg;

`
export const BottomFooterLang=styled('span')`
label:BottomFooterLang;
color: ${({theme})=>theme.pallet.greyColor6};
font-size: 1.2rem;
`