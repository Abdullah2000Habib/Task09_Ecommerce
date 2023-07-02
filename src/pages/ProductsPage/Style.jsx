import styled from "@emotion/styled";

export const ProductsPageWrapper=styled('div')`
label:ProductsPageWrapper;
background-color: ${({theme})=>theme.pallet.greyColor3}
`
export const ProductsPageRoutes=styled('div')`
label:ProductsPageRoutes;
padding: 1rem 0;
display: flex;
align-items: center;
gap:0.5rem;
@media screen  and (max-width:585px){
    gap:0.1rem;
}
`
export const ProductsPageRoute=styled('span')`
label:ProductsPageRoute;
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
export const ProductsPageContainer=styled('div')`
label:ProductsPageContainer;
display: flex;
gap:1rem;
@media screen  and (max-width:612px){
    flex-direction: column;
}
`
export const ProductsPageLeft=styled('div')`
label:ProductsPageLeft;
width:20%;
@media screen  and (max-width:1430px){
    width:25%;
}
@media screen  and (max-width:1100px){
    width:40%;
}
@media screen  and (max-width:708px){
    width:50%;
}
@media screen  and (max-width:612px){
    width:100%;
}
`
export const ProductsPageRight=styled('div')`
label:ProductsPageRight;
width:80%;
display: flex;
gap:1.5rem;
flex-wrap: wrap;
@media screen  and (max-width:612px){
    width:100%;
}

`