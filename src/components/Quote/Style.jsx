import styled from "@emotion/styled";


export const QuoteWrapper =styled('div')`
label:QuoteWrapper;
background-color: white;
padding:1rem;
display: flex;
flex-direction: column;
gap:1.5rem;
border-radius: 5px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

&>button{
    width:fit-content;
}


`
export const QuoteTitle =styled('h3')`
label:QuoteTitle;
font-weight: 600;
font-size:1.3rem;
`
export const QuoteDetails =styled('textarea')`
label:QuoteDetails;
width: 100%;
height:5rem;
resize: none;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
padding-right: 1.9rem;

`
export const QuoteContainer =styled('div')`
label:QuoteContainer;
display: flex;
align-items: center;
gap: 0.5rem;

&>select{
    width: 60%;
}

@media screen and (max-width: 540px) {
    flex-direction: column;
    &>select{
        width: 100%;
    }
}
`

export const PhoneKeys =styled('select')`
label:PhoneKeys;
width: 100%;
padding:${({theme})=>theme.fontSizes.body}rem;
border: none;
outline: none;
border-radius:6px;
border:1px solid ${({theme})=>theme.pallet.greyColor2};
font-size:${({theme})=>theme.fontSizes.h4}rem;
cursor:pointer;
`
export const PhoneKey =styled('option')`
label:PhoneKey;

`