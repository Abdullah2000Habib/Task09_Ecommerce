import styled from "@emotion/styled";

export const CartPageWrapper=styled('div')`
label:CartPageWrapper;
background-color: ${({theme})=>theme.pallet.greyColor3};
`
export const CartPageTitle=styled('h3')`
label:CartPageTitle;
font-size: 1.6rem;
font-weight: 600;
margin:1.5rem 0 ;
`
export const CartPageFirstFloor=styled('div')`
label:CartPageFirstFloor;
display: flex;
gap:1.5rem;
flex-wrap: wrap;
`
export const CartPagePayment=styled('div')`
label:CartPagePayment;
display: flex;
flex-direction: column;
gap:1rem;
flex-wrap: wrap;
@media screen and (max-width: 1270px) {
    width:100%;
    flex-direction: row;
}
`
