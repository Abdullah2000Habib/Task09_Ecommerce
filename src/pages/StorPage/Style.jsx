import styled from "@emotion/styled";

export const StorPageWrapper=styled('div')`
label:StorPageWrapper;
background-color: ${({theme})=>theme.pallet.greyColor3}
`
export const StorPageRoutes=styled('div')`
label:StorPageRoutes;
padding: 1rem 0;
display: flex;
align-items: center;
gap:0.5rem;
@media screen  and (max-width:585px){
    gap:0.1rem;
}
`
export const StorPageRoute=styled('span')`
label:StorPageRoute;
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
export const StorPageContainer=styled('div')`
label:StorPageContainer;
display: flex;
gap:1rem;
@media screen  and (max-width:612px){
    flex-direction: column;
}
`
export const StorPageLeft=styled('div')`
label:StorPageLeft;
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
export const StorPageRight=styled('div')`
label:StorPageRight;
width:80%;
display: flex;
flex-direction: column;
gap:1rem;
flex-wrap: wrap;
@media screen  and (max-width:612px){
    width:100%;
}

`