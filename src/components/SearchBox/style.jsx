import styled from "@emotion/styled";


export const Categories =styled('select')`
label:Categories;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
/* border-radius:6px; */
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
cursor:pointer;
border: none;
border-radius: none;

&>::after{
background-color:${({theme})=>theme.pallet.blueColor};
}
`
export const Category =styled('option')`
label:Category;
`
export const SearchBoxWrapper =styled('div')`
label:SearchBoxWrapper;
display: flex;
width:50%;
border:2px solid ${({theme})=>theme.pallet.blueColor};
border-radius:5px ;
overflow: hidden;
&>:last-child{
    border-radius: 0;
    width:30%;
    @media (max-width: 500px) {
            width:100%;
}
}
/* ------------------------ */
@media (max-width: 500px) {
       width:70%;
       flex-direction: column;
}

@media (max-width: 1270px) {
    width:90%;
}

`


export const SearchInput =styled('input')`
label:SearchInput;
width:100%;
border:none;
outline: none;
padding:${({theme})=>theme.fontSizes.body}rem;
font-size:${({theme})=>theme.fontSizes.h4}rem;
border-right:1px solid ${({theme})=>theme.pallet.blueColor};

@media (max-width: 500px) {
    border: none;
    border-bottom:2px solid ${({theme})=>theme.pallet.blueColor};

}
`