import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    background-color: ${({ theme }) => theme.backgroundColors.grey};
  }

  a {
      text-decoration: none;
  }

  a:visited {
      color: black;
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

`
