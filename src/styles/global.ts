import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
    }

    body{
        background-color: ${(props) => props.theme['grey21']};
        color: ${(props) => props.theme['white']};
        -webkit-font-smoothing:antialiased;
    }

    
    body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400px ;
        font-size: 1rem;
    }

`
export const GlobalStyleLight = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body{
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-900']};
        -webkit-font-smoothing:antialiased;
    }

    
    body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400px ;
        font-size: 1rem;
    }

`