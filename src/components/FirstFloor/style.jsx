import styled from "@emotion/styled";

export const FirstFloorWrapper=styled('div')`
label:FirstFloorWrapper;
display: flex;
/* flex-wrap: wrap; */
gap:1.5rem;
padding:1rem;
background-color: ${({theme})=>theme.pallet.whiteColor};
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
margin: 1.5rem 0 ;

@media (max-width: 1285px) {
flex-wrap: wrap;
}
`


export const FirstFloorCards=styled('div')`
label:FirstFloorCards;
width: 18%;
display:flex;
flex-direction: column;
gap:1rem;
flex-wrap: wrap;
@media (max-width: 1285px) {
width: 100%;
flex-direction: row;
}

@media (max-width: 750px) {
    flex:1;
}
@media (max-width: 510px) {
    flex-direction: column;
}

`