import { createGlobalStyle } from "styled-components";
import { BasicTheme , DarkTheme } from "../Theme/Theme";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none !important;
}

body {
    background-color: ${props => props.isDark ? DarkTheme.primaryBg : BasicTheme.primaryBg};
    font-family: "vazir" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`   

export default GlobalStyles;