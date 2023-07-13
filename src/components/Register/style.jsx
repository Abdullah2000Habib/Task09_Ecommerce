import styled from "@emotion/styled";



export const RegisterWrapper =styled('div')`
label:RegisterWrapper;
    @media (max-width: 1287px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
margin:auto;
background-color: ${({theme})=>theme.pallet.whiteColor1};
width: 30%;
padding: ${({theme})=>theme.fontSizes.body}rem ${({theme})=>theme.fontSizes.h3}rem ;
border-radius: 6px;
border: 0.5px solid ${({theme})=>theme.pallet.blackColor2};
display: flex;
flex-direction: column;
gap: 1.3rem;
box-shadow: ${({theme})=>theme.boxShadows.boxShadow1};
`
export const RegisterTitle =styled('h4')`
label:RegisterTitle;
font-size: ${({theme})=>theme.fontSizes.h3}rem;
color: ${({theme})=>theme.pallet.blackColor};
`
export const RegisterName =styled('div')`
label:RegisterName;      
width:100%;
display: flex;
gap: 0.5rem;
align-items: center;

  @media (max-width: 700px) {
       flex-direction: column;
       align-items: start
  }
`
export const PhoneContainer =styled('div')`
label:PhoneContainer;
width:100%;
display: flex;
gap: 0.5rem;

  @media (max-width: 700px) {
       flex-direction: column;
       align-items: start
  }
`
export const PhoneKeys =styled('select')`
label:PhoneKeys;
width: 100%;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
cursor:pointer;
`
export const PhoneKey =styled('option')`
label:PhoneKey;

`

export const InputContainer =styled('div')`
label:InputContainer;
width: 100%;
`
export const CheckboxContainer =styled('div')`
label:CheckboxContainer;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 0.2rem;

`
export const RegisterAccount =styled('div')`
label:RegisterAccount;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-size: 1.09rem;
`
export const RegisterSpan =styled('span')`
label:RegisterSpan;
color:${({theme})=>theme.pallet.greyColor4};

`