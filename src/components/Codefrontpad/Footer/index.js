import React from "react";
import { StyledFooter } from "./styled";

const Footer = () => (
  <StyledFooter>
    Сделано <a href="https://github.com/emwsc">emwsc</a> с{" "}
    <span role="img" aria-label="пивко">
      🖤
    </span>{" "}
    и под{" "}
    <span role="img" aria-label="пивко">
      🍺
    </span>
  </StyledFooter>
);

export default Footer;
