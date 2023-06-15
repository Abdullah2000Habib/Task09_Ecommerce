import styled from "@emotion/styled";

export const BottomHeaderBody =styled('div')`
label:BottomHeaderBody;
background-color: ${({theme})=>theme.pallet.whiteColor};
border:1px solid ${({theme})=>theme.pallet.greyColor2};
`


export const BottomHeaderWrapper =styled('div')`
label:BottomHeaderWrapper;
padding: 0.5rem 0;
display: flex;
align-items: center;
justify-content: space-between;
`
export const BottomHeaderWrapperLeft =styled('div')`
label:BottomHeaderWrapperLeft;
width: 60%;
display: flex;
align-items: center;
gap:0.5rem;

`
export const BottomHeaderWrapperLeftLinks =styled('div')`
label:BottomHeaderWrapperLeftLinks;
width: 100%;
display: flex;
align-items: center;
gap: 2rem;
`

export const BottomHeaderSpan =styled('span')`
label:BottomHeaderSpan;
font-size:1rem;
font-weight: 500;
cursor: pointer;
transition: 0.3s;
&:hover{
    color:${({theme})=>theme.pallet.blueColor};
}
`
export const Selector =styled('select')`
label:Selector;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:1rem;
font-weight: 500;
cursor:pointer;
border: none;
border-radius: none;
width: fit-content;
&>::after{
background-color:${({theme})=>theme.pallet.blueColor};
}
`
export const Option =styled('option')`
label:Option;
`

export const BottomHeaderWrapperRight =styled('div')`
label:BottomHeaderWrapperRight;
display: flex;
align-items: center;
gap: 1.5rem;

`
export const Country =styled('div')`
label:Country;
display: flex;
align-items: center;
gap: 0.5rem;
cursor:pointer;
`


export const FlagImage =styled('img')`
label:FlagImage;
`
