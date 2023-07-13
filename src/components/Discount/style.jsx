import styled from "@emotion/styled";


export const DiscountWrapper=styled('div')`
label:DiscountWrapper;
display: flex;
align-items: center;
justify-content: space-between;
border-radius:6px;
height:120px;
overflow: hidden;
margin:1.5rem 0 5rem 0;

@media screen and (max-width: 800px) {
   flex-direction:column;
   height: auto;
}
`
export const DiscountLeft=styled('div')`
label:DiscountLeft;
width:70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap:0.3rem;
padding:0 2rem;
background-color: ${({theme})=>theme.pallet.blueColor};
@media screen and (max-width: 800px) {
    width: 100%;
   height: auto;
           padding:2rem;
}
`
export const DiscountTitle=styled('h3')`
label:DiscountTitle;
color: white;
font-size: 1.6rem;
font-weight:600;


`
export const DiscountDescription=styled('span')`
label:DiscountDescription;
color: ${({theme})=>theme.pallet.greyColor2};
font-size: 1.1rem;
font-weight:500;
`
export const DiscountRight=styled('div')`
label:DiscountRight;
background-color: ${({theme})=>theme.pallet.blueColor6};
height: 100%;
width:30%;
padding:0 2rem;
display: flex;
align-items: center;
justify-content: space-between;

&>button {
    width:fit-content;
    background-color: ${({theme})=>theme.pallet.orangeColor};
}
@media screen and (max-width: 800px) {
    justify-content: center;
        width: 100%;
        padding:2rem;
}

`
export const DiscountRightContainer=styled('div')`
label:DiscountRightContainer;
min-width:30px;
height: 100%;
transform: skewX(10deg)  translateX(-47px);
background-color: ${({theme})=>theme.pallet.blueColor6};

@media screen and (max-width: 800px) {
    display: none;
}
`