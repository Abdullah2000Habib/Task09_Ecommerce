import styled from "@emotion/styled";

export const LinksWrapper=styled('div')`
label:LinksWrapper;
display: flex;
align-items: center;
gap:1rem;
border-bottom: 1px solid ${({theme})=>theme.pallet.greyColor};

@media screen  and (max-width: 700px){
flex-direction: column;
align-items: flex-start;
border-bottom: none;
}

.navLink{
    padding:1rem;
    font-weight: 500;
    font-size: 1.1rem;
    color:${({theme})=>theme.pallet.greyColor};
    @media screen  and (max-width: 700px){
        width:100%;
         border-bottom: 0.5px solid ${({theme})=>theme.pallet.greyColor};
    }

}


`