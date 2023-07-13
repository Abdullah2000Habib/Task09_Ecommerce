import styled from "@emotion/styled";


export const CartWrapper=styled('div')`
label:CartWrapper;
background-color:${({theme})=>theme.pallet.whiteColor1};
padding:1.5rem;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
flex:1;
@media screen and (max-width: 1270px) {
    flex:none;
    width:100%;
}
`

export const CartWrapperContainer=styled('div')`
label:CartWrapperContainer;
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 1.5rem;
&>:first-child{
    color:white;
}
&>button{
    width:fit-content;
    height: 3rem;
}

@media screen and (max-width: 500px) {
flex-direction: column;
gap:0.5rem;
&>button{
align-self: flex-start;
}
}
`

export const CartCardSaveBtn=styled('button')`
label:CartCardSaveBtn;
width:fit-content;
padding: ${({theme})=>theme.fontSizes.body}rem;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
background-color:${({theme})=>theme.pallet.whiteColor};
color:${({theme})=>theme.pallet.blueColor};
font-size:1rem;
font-weight:500;
transition: all 0.2s ease-in-out;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
padding:0.5rem 1rem;
&:hover {
    background-color:${({theme})=>theme.pallet.greyColor2};
}
`

