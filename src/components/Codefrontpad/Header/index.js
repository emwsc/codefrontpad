import React from "react";
import { StyledHeader, StyledTitle, StyledSettings } from "./styled";

const Header = () => (
  <StyledHeader>
    <StyledTitle>codefrontpad</StyledTitle>
    <StyledSettings>
      <i className="fas fa-cogs" />
      <span>Настроить</span>
    </StyledSettings>
  </StyledHeader>
);

export default Header;
