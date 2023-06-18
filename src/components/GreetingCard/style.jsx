import styled from "@emotion/styled";


export const GreetingCardWrapper =styled('div')`
label:GreetingCardWrapper;
background-color: ${({theme})=>theme.pallet.blueColor8};
border-radius: 6px;
padding: 0.8rem;
display: flex;
flex-direction: column;
gap:0.3rem;
flex:1;
flex-wrap: wrap;

@media (max-width: 1285px) {
flex:2;
}
`
export const GreetingCardPerson =styled('div')`
label:GreetingCardPerson;
display: flex;
align-items: center;
gap: 0.5rem;
margin-bottom: 0.5rem;;
`
export const GreetingCardImg =styled('img')`
label:GreetingCardImg;
border-radius: 50%;
width: 45px;
height: 45px;
object-fit: contain;
padding-top:10px;
background-color: #9fd2f9;
cursor: pointer;
`
export const GreetingCardMessage =styled('div')`
label:GreetingCardMessage;
display: flex;
flex-direction: column;
`
export const GreetingCardSpan =styled('span')`
label:GreetingCardSpan;
white-space: nowrap;
`
export const GreetingCardJoinButton =styled('button')`
label:GreetingCardJoinButton;
padding: ${({theme})=>theme.fontSizes.body}rem;
width:100%;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
${({theme})=>`background-color:${theme.pallet.blueColor6}`};
font-size:${({theme})=>theme.fontSizes.h4}rem;
transition: all 0.2s ease-in-out;
box-shadow: 2px 1px 3px rgba(0,0,0,0.2);
padding:0.5rem 1rem;
${({theme})=>`color:${theme.pallet.whiteColor}`};

&:hover {
    ${({theme})=>`background-color:${theme.pallet.blueColor}`};
}
margin: 0.4rem 0 0.3rem 0;
`
export const GreetingCardLearnButton =styled('button')`
label:GreetingCardLearnButton;
width: 100%;
  padding: ${({theme})=>theme.fontSizes.body}rem;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  padding:0.5rem 1rem;

  ${({ theme }) =>
    ` background-color: ${theme.pallet.whiteColor}; color:${theme.pallet.blueColor};`}
  font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  &:hover {
    ${({ theme }) =>
      ` background-color: ${theme.pallet.greyColor5}; color:${theme.pallet.blueColor};`}
  }

`
