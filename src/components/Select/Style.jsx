import styled from "@emotion/styled";

export const SelectWrapper=styled('div')`
label:SelectWrapper;
display: flex;
align-items: center;
gap:0.8rem;
`
export const SelectInput=styled('input')`
label:SelectInput;
/* margin-left:1rem; */
width: 20px;
height: 20px;
cursor: pointer;
`
export const SelectTitle=styled('label')`
label:SelectTitle;
color:${({theme})=>theme.pallet.greyColor};
font-size:1.1rem;
cursor: pointer;

`