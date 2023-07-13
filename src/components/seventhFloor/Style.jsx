import styled from "@emotion/styled";

export const SeventhFloorWrapper=styled('div')`
label:SeventhFloorWrapper;
display: flex;
flex-direction:column;
gap:1.5rem;
margin: 1.5rem 0 ;
`

export const SeventhFloorTitle=styled('h3')`
label:SeventhFloorTitle;
font-weight:600;
font-size:1.4rem;
color:${({theme})=>theme.pallet.blackColor};
`


export const SeventhFloorCards=styled('div')`
label:SeventhFloorCards;
display:flex;
align-items: center;
flex-wrap:wrap;
gap:1rem;`
