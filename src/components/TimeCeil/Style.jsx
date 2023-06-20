import styled from "@emotion/styled";

export const TimeCeilWrapper=styled('div')`
label:TimeCeilWrapper;
/* width:3rem; */
/* height: 3.5rem; */
background-color: ${({theme})=>theme.pallet.blackColor2};
padding: 0.5rem 0.6rem ;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
border-radius: 6px;
cursor: pointer;

`
export const TimeCeilNum=styled('span')`
label:TimeCeilNum;
font-weight: 500;
color: ${({theme})=>theme.pallet.whiteColor};
`
export const TimeCeilUnit=styled('span')`
label:TimeCeilUnit;
font-size:0.6rem;
color: ${({theme})=>theme.pallet.whiteColor};
`