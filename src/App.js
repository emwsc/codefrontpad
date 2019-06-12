import React from "react";
import Codefrontpad from "./components/Codefrontpad";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #231123;
    font-family: 'Fira Mono', monospace;
    margin: 0;
    color: #EFF7FF;
  }
  a{
    color: #558C8C;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Codefrontpad />
    </React.Fragment>
  );
}

export default App;
