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
@media (max-width: 1220px) {
    align-items: start;
}

`
export const BottomHeaderWrapperLeft =styled('div')`
label:BottomHeaderWrapperLeft;
width: 60%;
display: flex;
align-items: center;
gap:0.5rem;

@media (max-width: 1220px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}


`
export const BottomHeaderWrapperLeftLinks =styled('div')`
label:BottomHeaderWrapperLeftLinks;
width: 100%;
display: flex;
align-items: center;
gap: 2rem;
@media (max-width: 1220px) {
   gap: 0.5rem;
   flex-direction: column;
   align-items: flex-start;
   gap:1rem;
}
`

export const BottomHeaderSpan =styled('span')`
label:BottomHeaderSpan;
font-size:1rem;
font-weight: 500;
cursor: pointer;
transition: 0.3s;
white-space:nowrap;
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

@media (max-width: 1220px) {
padding:0;

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

@media (max-width: 1220px) {
   width: 100%;
   flex-direction: column;
   align-items: start;
   gap: 0.5rem;
}

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
