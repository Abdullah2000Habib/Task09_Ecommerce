import styled from "@emotion/styled";


export const MenuWrapper=styled('div')`
label:MenuWrapper;
padding:1rem;
border-top: 1px solid ${({theme})=>theme.pallet.greyColor2};
cursor: pointer;
display:flex;
flex-direction: column;
gap:0.5rem;
`
export const MenuContainer=styled('div')`
label:MenuContainer;
display: flex;
align-items: center;
justify-content: space-between;

.arrowIcon{
    color:${({theme})=>theme.pallet.greyColor};
}
`
export const MenuTitle=styled('h3')`
label:MenuTitle;
font-weight: 600;
color: ${({theme})=>theme.pallet.blackColor};
`
export const MenuItems=styled('div')`
label:MenuItems;
display: flex;
flex-direction: column;
gap:0.5rem;
`
export const MenuButton=styled('span')`
label:MenuButton;
  color:${({theme})=>theme.pallet.blueColor};
  font-size:1.1rem;
  font-weight: 500;
  padding-bottom: 1rem;
`