import React from "react";
import { StyledHeader, StyledTitle, StyledSettings } from "./styled";

const Header = ({ changeSettingsVisibility, isSettingsVisibile }) => (
  <StyledHeader>
    <StyledTitle>codefrontpad</StyledTitle>
    {!isSettingsVisibile && (
      <StyledSettings
        onClick={() => {
          changeSettingsVisibility(true);
        }}
      >
        <i className="fas fa-cogs" />
        <span>Настроить</span>
      </StyledSettings>
    )}
    {isSettingsVisibile && (
      <StyledSettings
        onClick={() => {
          changeSettingsVisibility(false);
        }}
      >
        <i className="fas fa-window-close" />
        <span>Закрыть настройки</span>
      </StyledSettings>
    )}
  </StyledHeader>
);

export default Header;
