import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    color: #999;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: fit-content;
    min-height: 100vh;

    min-width: 320px;
  }

  ul,
  li {
    list-style: none;
  }

  body {
    background: #f9f9f9;
  }
`;
