import styled from "@emotion/styled";

export const SecondFloorWrapper=styled('div')`
label:SecondFloorWrapper;
display: flex;
background-color: ${({theme})=>theme.pallet.whiteColor1};
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-right: none;
border-radius:6px;
overflow: hidden;
margin: 2rem 0 1.5rem 0 ;
@media screen and (max-width:1220px){
    flex-wrap:wrap;
}
@media screen and (max-width:800px){
    &>:last-child{
    /* flex:none; */
    width:100%;
    border-bottom:none;
    }
}
`