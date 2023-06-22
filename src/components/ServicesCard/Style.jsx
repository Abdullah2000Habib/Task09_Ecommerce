import styled from "@emotion/styled";

export const ServicesCardWrapper=styled('div')`
label:ServicesCardWrapper;
cursor:pointer;
height: 250px;
flex:1 200px;
background-color:${({theme})=>theme.pallet.whiteColor};
display: flex;
flex-direction: column;
border-radius:6px;
overflow: hidden;
border:1px solid ${({theme})=>theme.pallet.greyColor2};

&:hover{
    img{
        transform: scale(1.1);
    }
}
`
export const ServicesCardContainer=styled('div')`   
label:ServicesCardContainer;
position: relative;
width:100%;
height: 130px;
background-color: black;
overflow: hidden;
`
export const ServicesCardImg=styled('img')`
label:ServicesCardImg;
height: 100%;
width: 100%;
object-fit: cover;
transition: all 0.3s ease-in-out;
`
export const ServicesCardIconContainer=styled('div')`
label:ServicesCardIconContainer;
position: relative;
`
export const ServicesCardIcon=styled('div')`
label:ServicesCardIcon;
width:50px;
height:50px;
position: absolute;
background-color: ${({theme})=>theme.pallet.blueColor8};
padding: 0.8rem;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
border:3px solid ${({theme})=>theme.pallet.whiteColor};
right:5%;
top:-25px;
`
export const ServicesCardTitle=styled('span')`
label:ServicesCardTitle;
display:inline-block;
background-color:white;
padding:1rem;
width:80%;
font-weight: 500;

`