import styled from "@emotion/styled";


export const DetailsWrapper=styled('div')`
label:DetailsWrapper;
background-color: ${({theme})=>theme.pallet.whiteColor};
padding:1rem;
display: flex;
flex-direction: column;
gap:1.5rem;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius:6px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 0px 2px;
@media screen  and (max-width: 1130px){
    width:100%;
}
`
export const DetailsDescription=styled('p')`
label:DetailsDescription;
color: ${({theme})=>theme.pallet.greyColor6};
font-size: 1.1rem;
line-height: 1.5;
width: 80%;
@media screen  and (max-width: 1130px){
    width:100%;
}
`
export const DetailsItems=styled('div')`
label:DetailsItems;
display: flex;
flex-direction: column;
gap:0.5rem;
`
export const DetailsItem=styled('div')`
label:DetailsItem;
display: flex;
align-items:center;
gap:0.5rem;

&>svg{
    color: ${({theme})=>theme.pallet.greyColor};
}
`
export const DetailsTitle=styled('span')`
label:DetailsTitle;
color: ${({theme})=>theme.pallet.greyColor6};
font-size:1.1rem;
`