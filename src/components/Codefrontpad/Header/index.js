import React from "react";
import { StyledHeader, StyledTitle, StyledSettings } from "./styled";

const Header = ({ changeSettingsVisibility, isSettingsVisibile }) => {
  const hideSettings = () => changeSettingsVisibility(false);
  const showSettings = () => changeSettingsVisibility(true);

  return (
    <StyledHeader>
      <StyledTitle onClick={hideSettings}>codefrontpad</StyledTitle>
      {!isSettingsVisibile && (
        <StyledSettings onClick={showSettings}>
          <i className="fas fa-cogs" />
          <span>Настроить</span>
        </StyledSettings>
      )}
      {isSettingsVisibile && (
        <StyledSettings onClick={hideSettings}>
          <i className="fas fa-window-close" />
          <span>Закрыть настройки</span>
        </StyledSettings>
      )}
    </StyledHeader>
  );
};

export default Header;
