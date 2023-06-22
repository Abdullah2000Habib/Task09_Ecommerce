import styled from "@emotion/styled";
import quoteBg from "../../assets/images/image-102.png";
export const FifthFloorWrapper=styled('div')`
label:FifthFloorWrapper;
background-image: url(${quoteBg}) ;
background-repeat:no-repeat;
background-size: cover;
padding:1.5rem;
border-radius: 6px;
display: flex;
justify-content: space-between;
position:relative;
z-index: 1;

&>::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgb(1,1,9);
    background: linear-gradient(104deg, rgba(50, 153, 249, 0.8) 20%, rgba(58, 124, 248, 0.5) 60%);
    border-radius:6px;
    z-index: -1;
}

@media screen and (max-width: 935px) {
    flex-direction:column;
    gap: 1rem;
}
`
export const FifthFloorContainer=styled('div')`
label:FifthFloorContainer;
padding:0.5rem;
width:33%;
display: flex;
flex-direction: column;
gap:1.5rem;
color:${({theme})=>theme.pallet.whiteColor};

@media screen and (max-width: 935px) {
    width:90%;;
}
`
export const FifthFloorTitle=styled('h3')`
label:FifthFloorTitle;
font-weight:600;
font-size: 2rem;
@media screen and (max-width: 540px) {
    font-size: 1.5rem;
}
`
export const FifthFloorDetails=styled('p')`
label:FifthFloorDetails;
`