import styled from "@emotion/styled";

export const ProductsLinkWrapper =styled('div')`
label:ProductsLinkWrapper;
width: 20%;
min-height: 100%;
display: flex;
flex-direction: column;


@media (max-width: 1285px) {
flex:none;
width: 35%;
}

@media (max-width: 750px) {
    flex:1;
}

@media (max-width: 510px) {
    min-width: 100%;
}

`