import styled from "@emotion/styled";

export const FeatureCardWrapper=styled('div')`
label:FeatureCardWrapper;
display: flex;
align-items: center;
gap: 0.5rem;
`
export const FeatureCardIcon=styled('div')`
label:FeatureCardIcon;
width:50px;
height: 50px;
background-color: ${({theme})=>theme.pallet.greyColor2};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color:${({theme})=>theme.pallet.greyColor4};

&>svg{
    font-size: 1.6rem;
}
@media screen and (max-width: 500px) {
min-width:50px;
min-height: 50px;
&>svg{
    font-size: 1.3rem;
}
}
`
export const FeatureCardContainer=styled('div')`
label:FeatureCardContainer;
display: flex;
flex-direction: column;
gap:0.5rem;
`
export const FeatureCardTitle=styled('span')`
label:FeatureCardTitle;
font-size:1.1rem;
width: 100%;
@media screen and (max-width: 280px) {
    font-size:1rem;
}
`
export const FeatureCardDescription=styled('span')`
label:FeatureCardDescription;
color:${({theme})=>theme.pallet.greyColor4};
font-size:1.1rem;
font-weight:400;
width:100%;
@media screen and (max-width: 280px) {
    font-size:1rem;
}
`