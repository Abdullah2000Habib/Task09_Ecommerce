import styled from "@emotion/styled";

export const GalleryWrapper=styled('div')`
label:GalleryWrapper;
display: flex;
flex-direction: column;
gap:1rem;
background-color: ${({theme})=>theme.pallet.whiteColor};
width:40%;
flex:1;
    @media screen and (max-width: 1429px){
        width: 100%;
    }

`
export const GalleryTop=styled('div')`
label:GalleryTop;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
border-radius: 6px;
padding:2rem;
`
export const GalleryTopImg=styled('img')`
label:GalleryTopImg;
object-fit: cover;
    @media screen and (max-width: 780px){
            width:100%;
            height: 100%;
    }
`
export const GalleryBottom=styled('div')`
label:GalleryBottom;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
    @media screen and (max-width: 1429px){
      gap:1rem;
      justify-content:center;
      flex-wrap: wrap;
    }

`
export const GalleryBottomImg=styled('img')`
label:GalleryBottomImg;
border: 1px solid ${({theme})=>theme.pallet.greyColor2};
padding:1rem;
border-radius: 6px;
object-fit: contain;
    @media screen and (max-width: 780px){
        padding:0.5rem;
    }
`