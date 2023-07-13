import styled from "@emotion/styled";

export const SavedCardWrapper=styled('div')`
label:SavedCardWrapper;
display: flex;
flex-direction: column;
gap:0.5rem;
align-items: flex-start;

flex:1 260px;
`
export const SavedCardImg=styled('img')`
label:SavedCardImg;
width:100%;
height:260px;
background-color:transparent;
background-color: ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
padding: 2rem;
object-fit: contain;
`
export const SavedCardContainer=styled('div')`
label:SavedCardContainer;
display: flex;
flex-direction: column;
gap:0.5rem;

&>button{
    color: ${({theme})=>theme.pallet.blueColor};
    background-color:white;
    font-size: 1rem;
    font-weight:500;
    width: fit-content;
    padding-left: 3rem;
    box-shadow: none;
    border:1px solid ${({theme})=>theme.pallet.greyColor2};
    /* &>img{
    width:25px;
    height: 25px;
    object-fit: contain;
} */
}

`
export const SavedCardPrice=styled('span')`
label:SavedCardPrice;
font-weight:600;
font-size: 1.4rem;;
color:${({theme})=>theme.pallet.blackColor};
`
export const SavedCardDescription=styled('span')`
label:SavedCardDescription;
color: ${({theme})=>theme.pallet.greyColor};
font-size: 1.2rem;

`