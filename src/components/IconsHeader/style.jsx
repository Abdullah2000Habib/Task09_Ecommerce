import styled from "@emotion/styled";


export const IconsHeaderWrapper =styled('div')`
label:IconsHeaderWrapper;
display: flex;
align-items: center;
gap: 0.9rem;

.logout{
    background-color:rgba(99, 92, 92, 0.8);
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding:0.5rem;
    border-radius: 6px;
    color:${({theme})=>theme.pallet.bgPrimary}
}
`
export const Span =styled('span')`
label:Span;
display: flex;
align-items: center;
gap: 0.9rem;
`