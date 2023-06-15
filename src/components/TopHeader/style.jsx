import styled from "@emotion/styled";

export const TopHeaderBody =styled('div')`
label:TopHeaderBody;
background-color: ${({theme})=>theme.pallet.whiteColor};
`
export const TopHeaderWrapper =styled('div')`
label:TopHeaderWrapper;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 0;
flex-wrap: wrap;
gap:0.8rem;
@media (max-width: 1220px) {
flex-direction: column;
gap:1rem;
align-items: start;
}
`
export const TopHeaderImage =styled('img')`
label:TopHeaderImage;
`