import styled from "@emotion/styled";

export const ViewProductPageWrapper=styled('div')`
label:ViewProductPageWrapper;
background-color: ${({theme})=>theme.pallet.greyColor3};
`

export const StorPageRoutes=styled('div')`
label:StorPageRoutes;
padding: 1rem 0;
display: flex;
align-items: center;
gap:0.5rem;
@media screen  and (max-width:585px){
    gap:0.1rem;
}
`
export const StorPageRoute=styled('span')`
label:StorPageRoute;
display: flex;
align-items: center;
color: ${({theme})=>theme.pallet.greyColor4};
font-size:1.1rem;
font-weight:500;
cursor: pointer;
&> svg{
    font-size: 1.5rem;
    font-weight:bold;
}
@media screen  and (max-width:612px){
    font-size:0.8rem;
}
@media screen  and (max-width:280px){
    width:fit-content;
        font-size:0.6rem;
}
`













export const ViewProductTitle=styled('h3')`
label:ViewProductTitle;
font-size: 1.6rem;
font-weight: 600;
margin:1.5rem 0 ;
`
export const ViewProductFirstFloor=styled('div')`
label:ViewProductFirstFloor;
display: flex;
gap:1.5rem;
flex-wrap: wrap;
`
export const ViewProductPayment=styled('div')`
label:ViewProductPayment;
display: flex;
flex-direction: column;
gap:1rem;
flex-wrap: wrap;
@media screen and (max-width: 1270px) {
    width:100%;
    flex-direction: row;
}
`
