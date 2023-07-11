import styled from "@emotion/styled";

export const TableRowWrapper=styled('tr')`
label:TableRowWrapper;
`
export const TableRowDatProperty=styled('td')`
label:TableRowDatProperty;
border:1px solid ${({theme})=>theme.pallet.greyColor};
padding:0.5rem;
background-color:${({theme})=>theme.pallet.greyColor2};
color:${({theme})=>theme.pallet.greyColor6};
width:40%;
    @media screen  and (max-width: 280px){
        width:20%;
        font-size:0.8rem;
    }
`
export const TableRowDataValue=styled('td')`
label:TableRowDataValue;
border: 1px solid ${({theme})=>theme.pallet.greyColor};
padding:0.5rem;
color:${({theme})=>theme.pallet.greyColor4};
width:60%;

    @media screen  and (max-width: 280px){
        width:80%;
                font-size:0.8rem;
    }
`