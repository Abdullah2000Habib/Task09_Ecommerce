import styled from "@emotion/styled";

export const TrendingWrapper =styled('div')`
label:TrendingWrapper;
position: relative;
flex:1;

@media (max-width: 1285px) {
flex:1 62%;
}
@media (max-width: 750px) {
    order:-1;
    min-width:100%;
}

@media (max-width: 510px) {
    display:none
}


`
export const TrendingImg =styled('img')`
label:TrendingImg;
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 6px;
`
export const TrendingContainer =styled('div')`
label:TrendingContainer;
position: absolute;
top:3rem;
left:2rem;
display: flex;
flex-direction: column;
gap: 0.1rem;
`
export const TrendingSpan =styled('span')`
label:TrendingSpan;
font-size: 2rem;
`
export const TrendingTitle =styled('h3')`
label:TrendingTitle;
font-size:2rem;
`
export const TrendingButton =styled('button')`
label:TrendingButton;
padding: ${({theme})=>theme.fontSizes.body}rem;
width:fit-content;
cursor:pointer;
border-radius: 6px;
outline: none;
border:none;
${({theme})=>`background-color:${theme.pallet.whiteColor}`};
font-size:${({theme})=>theme.fontSizes.h4}rem;
transition: all 0.2s ease-in-out;
box-shadow: 2px 1px 3px rgba(0,0,0,0.2);
padding:0.5rem 1rem;
margin-top:1.3rem;

&:hover {
    ${({theme})=>`background-color:${theme.pallet.greyColor2}`};
}
`