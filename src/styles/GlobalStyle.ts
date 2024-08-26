import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    font-family: Arial, sans-serif
    margin: 0
    padding: 0
    background-color: #f9f9f9
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    text-align: center
}

#root {
    width: 100%
    max-width: 1200px
}

h1 {
    margin-top: 20px
}
`

export default GlobalStyle
