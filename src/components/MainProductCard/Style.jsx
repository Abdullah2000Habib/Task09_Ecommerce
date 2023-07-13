import styled from "@emotion/styled";

export const MainProductCardWrapper=styled('div')`
label:MainProductCardWrapper;
flex:1;
height: 100%;
padding:0.5rem;
display: flex;
align-items: center;
justify-content: space-between;
border-right: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-bottom: 1px solid ${({theme})=>theme.pallet.greyColor2};
cursor: pointer;
/* border-radius:6px; */
&:hover img {
    transform: scale(1.09);
}

    @media screen and (max-width: 1290px) {
        border:  1px solid ${({theme})=>theme.pallet.greyColor2};
        flex:none;
        width:50%;

    }

      @media screen and (max-width: 548px) {
      width:100%;

    }
`
export const MainProductCardContainer=styled('div')`
label:MainProductCardContainer;
display: flex;
flex-direction: column;
gap:0.5rem;
`
export const MainProductCardTitle=styled('span')`
label:MainProductCardTitle;
color:${({theme})=>theme.pallet.blackColor};

`
export const MainProductCardPrice=styled('span')`
label:MainProductCardPrice;
width:50%;
color:${({theme})=>theme.pallet.greyColor};
font-size:0.9rem;

    @media screen and (max-width: 1290px) {
       height: 100px;

    }
`
export const MainProductCardImg=styled('img')`
label:MainProductCardImg;
transition: 0.3s all ease-in-out;
max-width: 90px;
max-height: 90px;
`