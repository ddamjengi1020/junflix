import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
      text-decoration: none;
      color: inherit;
  }
  * {
      box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    background-color: rgb(27, 27, 27);
    padding-top: 90px;
    color: white;
  }
`;

export default GlobalStyle;
