import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline:0;
      box-shadow: 10px 10px 29px -20px rgba(0,0,0,0.75);
    }

    body{
      background-color: ${props => props.theme.Light['background-color']};
      color:  ${props => props.theme.Light['font-color']};
      -webkit-font-smoothing: antialiased;
    }

    button{
      background-color: ${props => props.theme.Light['button']};
    }

    body, input, textarea, button, a {
      font:400 1rem 'Montserrat', sans-serif;

    }
  }

`