import { css } from '@emotion/react';

const GlobalStyle =(theme)=>css`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter','sans-serif';
    }

    body{
        background-color: ${theme.pallet.bgPrimary};
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
    }
`

export default GlobalStyle;