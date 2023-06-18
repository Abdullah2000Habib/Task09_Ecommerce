import styled from "@emotion/styled";

export const ProductLinkWrapper =styled('div')`
label:ProductLinkWrapper;
background-color: white;
transition: 0.3s;
border-radius: 8px;
cursor: pointer;
height: 100%;
.ProductLinkStyle{
    width:100%;
    height: 100%;
    padding:0.6rem;
    display: flex;
    align-items: center;
    color:${({theme})=>theme.pallet.greyColor};
    border-radius: 6px;
    font-weight: 500;
    
}
&:hover{
    background-color: ${({theme})=>theme.pallet.blueColor8};
}
`