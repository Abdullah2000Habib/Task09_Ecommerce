import styled from "@emotion/styled";

export const ThirdFloorWrapper=styled('div')`
label:ThirdFloorWrapper;
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
export const ThirdFloorContainer=styled('div')`
label:ThirdFloorContainer;
display: flex;
flex-direction: column;
flex:1;
    @media screen and (max-width: 1290px) {
        flex:none;
        width: 100%;
        /* gap:2rem; */
    }
`
export const ThirdFloorContainerTop=styled('div')`
label:ThirdFloorContainerTop;
display: flex;
height: 50%;
    @media screen and (max-width: 1290px) {
        flex-wrap: wrap;

    }
`
export const ThirdFloorContainerBottom=styled('div')`
label:ThirdFloorContainerBottom;
display: flex;
height: 50%;
    @media screen and (max-width: 1290px) {
        flex-wrap: wrap;
    }
`