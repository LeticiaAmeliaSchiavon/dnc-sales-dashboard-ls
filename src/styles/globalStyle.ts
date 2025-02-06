import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        background: ${(props) => props.theme.appColor}
        margin: 0;
        padding: 0;
        font-family: "Inter", serif;
    }
    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }    
`
