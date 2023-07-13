import styled from "@emotion/styled";


export const TopFooterBody=styled('div')`
label:TopFooterBody;
background-color:${({theme})=>theme.pallet.whiteColor};
padding:3rem 0 4rem;
`
export const TopFooterWrapper=styled('div')`
label:TopFooterWrapper;
display:flex;
gap:5rem;
flex-wrap:wrap;
@media screen and (max-width: 1300px){
gap:2rem;
}
`
export const TopFooterLeft=styled('div')`
label:TopFooterLeft;
display:flex;
flex-direction: column;
align-items: flex-start;
gap:1rem;
flex:1.5;

@media screen and (max-width: 1300px){
    flex:none;
    width:100%;
}
@media screen and (max-width: 855px){
order:0;
flex:1;
}
@media screen and (max-width: 514px){
flex:none;
width:100%;
}
`
export const TopFooterLeftLogo=styled('img')`
label:TopFooterLeftLogo;
cursor: pointer;
`
export const TopFooterLeftDescription=styled('span')`
label:TopFooterLeftDescription;
font-size:1.1rem;
font-weight:400;
color:${({theme})=>theme.pallet.blackColor};
`
export const TopFooterLeftSocial=styled('div')`
label:TopFooterLeftSocial;
display: flex;
align-items: center;
gap:1rem;
`
export const TopFooterLeftImage=styled('img')`
label:TopFooterLeftImage;
cursor:pointer;
width: 35px;
`
export const TopFooterCenter=styled('div')`
label:TopFooterCenter;
flex:4;
display: flex;
justify-content: space-between;

@media screen and (max-width: 855px){
order:2;
}

@media screen and (max-width: 630px){
flex-wrap:wrap;
gap:1rem;
}

@media screen and (max-width: 514px){
order:1;
}
`
export const TopFooterCenterContainer=styled('div')`
label:TopFooterCenterContainer;
display: flex;
flex-direction:column;
gap:1rem;
@media screen and (max-width: 630px){
flex:1 150px;
}
`
export const TopFooterTitle=styled('h3')`
label:TopFooterTitle;
font-weight:500;
font-size:1.4rem;
color:${({theme})=>theme.pallet.blackColor};
`
export const TopFooterCenterContainerItem=styled('span')`
label:TopFooterCenterContainerItem;
color:${({theme}) => theme.pallet.greyColor4};
font-size:1.2rem;
cursor: pointer;
`
export const TopFooterRight=styled('div')`
label:TopFooterRight;
display: flex;
flex-direction: column;
gap:1rem;

@media screen and (max-width: 855px){
order:1;
}
@media screen and (max-width: 514px){
flex:none;
width:100%;
order:2;
}
`
export const TopFooterRightImg=styled('img')`
label:TopFooterRightImg;
background-color: black;
width:150px;
object-fit: cover;
border-radius: 6px;
padding: 0.5rem;
cursor: pointer;
`