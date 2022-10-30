import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');
    
    *{
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.colors.body};
        color: hsl(92%, 100%, 9%);
        font-family: 'poppins', sans-serif;
        font-size: 1rem;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
    
    `;
