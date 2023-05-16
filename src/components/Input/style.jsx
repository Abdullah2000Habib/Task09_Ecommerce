import styled from "@emotion/styled";


export const InputWrapper = styled('div')`
label:InputWrapper;
position:relative;
&>:nth-child(2){
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    font-size: ${({theme})=>theme.fontSizes.passIcon}rem;
    color: ${({theme})=>theme.pallet.blackColor3};
    cursor: pointer;
}
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
padding-right: 1.9rem;

`

