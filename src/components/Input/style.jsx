import styled from "@emotion/styled";


export const InputWrapper = styled('div')`
label:InputWrapper;
display: flex;
flex-direction:column;
width: 100%;
margin-left:10rem;

`
export const InputLabel = styled('label')`
label:InputLabel;
font-size: ${({theme})=>theme.fontSizes.h4}rem;
`
export const InputFelid = styled('input')`
label:InputFelid;
width: 100%;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
`