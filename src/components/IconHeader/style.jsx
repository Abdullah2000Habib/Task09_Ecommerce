import styled from "@emotion/styled";


export const IconHeaderWrapper =styled('div')`
label:IconHeaderWrapper;
width:fit-content;
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
cursor: pointer;
transition:all 0.3s;
&:hover{
    &>:nth-child(2){
        color:${({theme})=>theme.pallet.blueColor};
    }
}
`
export const IconHeaderImage =styled('img')`
label:IconHeaderImage;
`
export const IconHeaderTitle =styled('span')`
label:IconHeaderTitle;
color:${({theme})=>theme.pallet.greyColor};
font-size:0.9rem;
font-weight: 500;
`