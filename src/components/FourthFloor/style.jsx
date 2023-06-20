import styled from "@emotion/styled";

export const FourthFloorWrapper=styled('div')`
label:FourthFloorWrapper;
display: flex;
background-color: ${({theme})=>theme.pallet.whiteColor};
border:1px solid ${({theme})=>theme.pallet.greyColor2};
border-right: none;
border-bottom: none;
border-radius: 6px;
margin: 1.5rem 0 ;
overflow: hidden;

@media screen and (max-width: 1290px) {
    flex-direction: column;
    border:1px solid ${({theme})=>theme.pallet.greyColor2};
    border-bottom: none;
}
`
export const FourthFloorContainer=styled('div')`
label:FourthFloorContainer;
display: flex;
flex-direction: column;
flex:1;
    @media screen and (max-width: 1290px) {
        flex:none;
        width: 100%;
        /* gap:2rem; */
    }
`
export const FourthFloorContainerTop=styled('div')`
label:FourthFloorContainerTop;
display: flex;
height: 50%;
    @media screen and (max-width: 1290px) {
        flex-wrap: wrap;

    }
`
export const FourthFloorContainerBottom=styled('div')`
label:FourthFloorContainerBottom;
display: flex;
height: 50%;
    @media screen and (max-width: 1290px) {
        flex-wrap: wrap;
    }
`