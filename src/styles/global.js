import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.COLORS.DARK300};
    color: ${({ theme }) => theme.COLORS.WHITE};
    overflow-y: scroll;
    
    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    outline: none;

}

a{
    text-decoration: none;
}

botton, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}
li{
    list-style: none;
}



`;
