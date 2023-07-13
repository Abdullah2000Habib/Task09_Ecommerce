import styled from "@emotion/styled";


export const ShoppingGuideWrapper=styled('div')`
label:ShoppingGuideWrapper;
position: relative;
cursor:pointer;
transition: all 0.3s ease-in-out;
overflow: hidden;
width:22.5%;
min-height: 100%;
border-bottom:1px solid ${({theme})=>theme.pallet.greyColor2};
&:hover > img{
        transform: rotate(10deg) scale(1.2);
    }

    @media screen and (max-width: 1290px) {
        width:100%;
        height: 300px;
        border:none;

        &:hover > img{
        transform: none;
    }
}

`

export const ShoppingGuideImg=styled('img')`
label:ShoppingGuideImg;
transition: all 0.5s ease-out;
width:100%;
height:100%;
object-fit: cover;

`

export const ShoppingGuideContainer=styled('div')`
label:ShoppingGuideContainer;
position:absolute;
padding: 1.5rem 1rem;
width:50%;
display: flex;
flex-direction: column;
gap: 1rem;
top: 3px;
@media screen and (max-width: 1290px) {
    width:100%;
}

`

export const ShoppingGuideTitle=styled('span')`
label:ShoppingGuideTitle;
font-weight:bold;
font-size:1.3rem;
color:black;
`

export const ShoppingGuideBtn=styled('button')`
label:ShoppingGuideBtn;
padding: ${({theme})=>theme.fontSizes.body}rem;
width:fit-content;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
background-color:white;
font-size:${({theme})=>theme.fontSizes.h4}rem;
transition: all 0.2s ease-in-out;
box-shadow: 2px 1px 3px rgba(0,0,0,0.2);
padding:0.7rem 0.5rem;

&:hover {
    ${({theme})=>`background-color:${theme.pallet.greyColor2}`};
}
`