import styled from "@emotion/styled";



export const LoginWrapper =styled('div')`
label:LoginWrapper;

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

&>button:nth-of-type(2){
  background-color: white;
}
&>button:nth-of-type(3){
color: white;
}
`
export const LoginTitle =styled('h4')`
label:LoginTitle;
font-size: ${({theme})=>theme.fontSizes.h3}rem;
color: ${({theme})=>theme.pallet.blackColor};
`
export const InputContainer =styled('div')`
label:InputContainer;
`
export const CheckboxContainer =styled('div')`
label:CheckboxContainer;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 0.2rem;

`
export const LoginAccount =styled('div')`
label:LoginAccount;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.5rem;
font-size: 1.09rem;
`
export const LoginSpan =styled('span')`
label:LoginSpan;
color:${({theme})=>theme.pallet.greyColor4};

`