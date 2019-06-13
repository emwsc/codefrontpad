import React from "react";
import { StyledTitle, StyledSection, StyledKeyword } from "./styled";
import NewKeyword from "./NewKeyword";

const Settings = ({ addKeyword, keywords, removeKeyword }) => {
  return (
    <div>
      <StyledSection>
        <StyledTitle>
          <i className="fas fa-hashtag" />
          <span>Поиск по тегам</span>
        </StyledTitle>
        <div>
          {keywords.map(keyword => (
            <StyledKeyword
              key={keyword}
              title={"Удалить тег " + keyword}
              onClick={() => removeKeyword(keyword)}
            >
              <i className="far fa-trash-alt" />
              <span>{keyword}</span>
            </StyledKeyword>
          ))}
        </div>
        <NewKeyword handleSubmit={addKeyword} />
      </StyledSection>
      {/* <StyledSection>
        <StyledTitle>
          <i className="fas fa-ban" />
          <span>Заблокированные теги</span>
        </StyledTitle>
      </StyledSection> */}
    </div>
  );
};

export default Settings;
