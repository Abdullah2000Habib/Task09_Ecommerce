import styled from "@emotion/styled";

export const SupplierWrapper=styled('div')`
label:SupplierWrapper;
display: flex;
flex-direction: column;
gap:1.5rem;
width:23%;
    @media screen and (max-width: 1429px){
        width:100%;
    }
`
export const SupplierContainer=styled('div')`
label:SupplierContainer;
display: flex;
align-items: center;
gap:0.5rem;
cursor: pointer;
&>svg {
    color:${({theme})=>theme.pallet.blueColor};
}
align-self: center;
`
export const SupplierTitle=styled('span')`
label:SupplierTitle;
    color:${({theme})=>theme.pallet.greyColor6};
    font-size: 0.9rem;

`
