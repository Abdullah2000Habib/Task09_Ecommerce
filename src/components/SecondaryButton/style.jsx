import styled from "@emotion/styled";


export const SecondaryButtonWrapper = styled('button')`
label:SecondaryButtonWrapper;
width:100%;
padding: ${({theme})=>theme.fontSizes.body}rem;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
position: relative;
${({theme,color})=>color==='google'?`background-color:${theme.pallet.whiteColor};color:${theme.pallet.blackColor3};`:`background-color:${theme.pallet.blueColor6};color:${theme.pallet.whiteColor};`};
font-size:${({theme})=>theme.fontSizes.h4}rem;
transition: all 0.2s ease-in-out;
box-shadow: 2px 1px 3px rgba(0,0,0,0.2);
&:hover {
    ${({theme,color})=>color==='google'?`background-color:${theme.pallet.greyColor2}`:`background-color:${theme.pallet.blueColor};`}};
`


export const SecondaryButtonImg = styled('img')`
label:SecondaryButtonImg;
position: absolute;
top: 50%;
left: 3%;
transform: translateY(-50%)
`