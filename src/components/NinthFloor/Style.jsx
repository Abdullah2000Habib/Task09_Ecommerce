import styled from "@emotion/styled";


export const NinthFloorWrapper=styled('div')`
label:NinthFloorWrapper;
background-color:${({theme})=>theme.pallet.greyColor2};
padding: 2.5rem 1rem;
margin-top:3rem;
display: flex;
flex-direction:column;
align-items: center;
gap:0.5rem;
`
export const NinthFloorTitle=styled('h3')`
label:NinthFloorTitle;
font-weight:600;
font-size:1.4rem;
`
export const NinthFloorDetails=styled('p')`
label:NinthFloorDetails;
color:${({theme}) => theme.pallet.greyColor4};
font-size:1.1rem;
`
export const NinthFloorContainer=styled('div')`
label:NinthFloorContainer;
display: flex;
align-items: center;
gap:1rem;

&>:last-child{
    width:fit-content;
}

@media screen and (max-width: 300px) {
    flex-direction:column;
}
`
export const NinthFloorInputWrapper=styled('div')`
label:NinthFloorInputWrapper;
position:relative;
padding:0.5rem;


.ninthFloorIcon{
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    left:1rem;
    color:${({theme})=>theme.pallet.greyColor}
}
`
export const NinthFloorInput=styled('input')`
label:NinthFloorInput;
width: 100%;
padding:${({theme})=>theme.fontSizes.body}rem;
padding-left:2rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor};
font-size:${({theme})=>theme.fontSizes.h4}rem;
padding-right: 1.9rem;
`