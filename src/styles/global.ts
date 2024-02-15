import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  li {
    list-style-type: none;
  }
`;
