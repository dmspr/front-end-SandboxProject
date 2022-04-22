import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    // --purple-primary:#554DDE;
    // --accent-pink: #F44E77;
    // --neutral-light: #f2f6ff;
    // --lavender-secondary: #6a6d9e;
    // --dark-primary: #16194f;
    // --border-colour: #cab6f1;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration:none;
}
body{
    background-color: var(--neutral-light);
    color:white;
    font-size:1.1rem;
}

a{
    color:inherit;
}
;
`