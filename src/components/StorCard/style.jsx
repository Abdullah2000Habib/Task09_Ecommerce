import styled from "@emotion/styled";


export const StorCardWrapper=styled('div')`
label:StorCardWrapper;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius:6px;
background-color:${({theme})=>theme.pallet.whiteColor};
display: flex;
gap:0.5rem;
align-items: flex-start;
width:100%;
@media screen  and (max-width:1350px){
flex-direction: column;
}



`
export const StorCardImg=styled('img')`
label:StorCardWrapper;
object-fit: contain;
align-self: center;
padding:2rem;
min-width:260px;
height: 260px;
@media screen  and (max-width:280px){
padding:0.5rem;
min-width:120px;
height: 120px;
}
`
export const StorCardContainer=styled('div')`
label:StorCardContainer;
padding:2rem;
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-between;
width:100%;
`
export const StorCardDetails=styled('div')`
label:StorCardDetails;
display: flex;
justify-content: space-between;
@media screen  and (max-width:280px){
    flex-direction:column;
    gap:0.5rem;
}
@media screen  and (max-width:1000px){
padding:1rem 0;
}
`
export const StorCardTitle=styled('span')`
label:StorCardTitle;
font-weight: 500;
font-size:1.1rem;

`
export const StorCardPrice=styled('div')`
label:StorCardPrice;
display: flex;
align-items: center;
gap:0.5rem;
`
export const StorCardNewPrice=styled('span')`
label:StorCardNewPrice;
font-weight: 600;
font-size:1.5rem;
`
export const StorCardOldPrice=styled('span')`
label:StorCardOldPrice;
color:${({theme})=>theme.pallet.greyColor};
padding-top: 3px;
font-weight: bold;
font-size:1.1rem;
text-decoration:line-through  2px solid;
`
export const StorCardReact=styled('div')`
label:StorCardReact;
padding:0.5rem;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
color:${({theme})=>theme.pallet.blueColor};
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
top:-10px;
&>svg {
    font-size:30px;
}
@media screen  and (max-width:280px){
    width:fit-content;
    padding:0.2rem;
}
@media screen  and (max-width:1000px){
position: initial;
}
`
export const StorCardRate=styled('div')`
label:StorCardRate;
display: flex;
align-items: center;
gap:0.5rem;
color:orange;

&>svg{
    color:${({theme})=>theme.pallet.greyColor2};
    font-size: 15px;
}

@media screen  and (max-width:1350px){
    padding:0.5rem 0;
}

@media screen  and (max-width:1000px){
    flex-wrap: wrap;
    padding:0.5rem 0;
/* flex-direction: column;
align-items: flex-start; */
}

/* &>svg{
display:none;
} */
`
export const StorCardStars=styled('div')`
label:StorCardStars;
&>svg {
    font-size:25px;
}
&>svg:not(:last-child) {
    color:orange;
}
&>svg:last-child{
    color:${({theme})=>theme.pallet.greyColor};
}
`
export const StorCardScore=styled('span')`
label:StorCardScore;
font-size:1.1rem;
font-weight: 500;
`
export const StorCardOrder=styled('span')`
label:StorCardOrder;
    color:${({theme})=>theme.pallet.greyColor};
    font-size:1.1rem;
`
export const StorCardShipping=styled('span')`
label:StorCardShipping;
    color:${({theme})=>theme.pallet.greenColor};
        font-size:1.1rem;
`
export const StorCardDescription=styled('span')`
label:StorCardDescription;
color:${({theme})=>theme.pallet.greyColor6};
font-size:1.1rem;
width:80%;
line-height:1.5;

@media screen  and (max-width:1000px){
width:100%;
}

`
export const StorCardButton=styled('span')`
label:StorCardButton;
color:${({theme})=>theme.pallet.blueColor6};
    font-size:1.1rem;
    font-weight: 500;
    cursor :pointer;

    @media screen  and (max-width:1350px){
    margin-top:0.5rem;
}
`
