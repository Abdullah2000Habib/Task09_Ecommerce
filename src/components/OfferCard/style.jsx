import styled from "@emotion/styled";

export const OfferCardWrapper = styled('div')`
label:OfferCardWrapper;
flex:1;
display: flex;
align-items: center;
${({textColor})=>textColor?`color:${textColor}`:`color:white`};
${({bgColor})=>bgColor?`background-color:${bgColor}`: `background-color:black`};
padding:1rem;
padding-right:3.3rem;
border-radius: 6px;
cursor:pointer;
`