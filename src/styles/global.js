import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        font-size: 62.8%;
        -webkit-font-smoothing: antialiased;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

        color: ${({ theme }) => theme.COLORS.BLACK};

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        outline: none;  
    }

    a{
        text-decoration: none;

        cursor: pointer;
        
        transition: color 0.5s;

        :hover {
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
}

    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }
    
    ::-webkit-scrollbar{
        width: 0.6rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }

    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.ORANGE};

        border-radius: 1rem;
    } 
`