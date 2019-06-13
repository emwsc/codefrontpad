import React, { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const NewKeyword = ({ handleSubmit }) => {
  const [value, changeValue] = useState("");

  const onFormSubmit = event => {
    event.preventDefault();
    handleSubmit(value);
    changeValue("");
  };

  const handleChange = event => changeValue(event.target.value);

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledButton type="submit">Добавить тег</StyledButton>
      <StyledInput type="text" value={value} onChange={handleChange} />
    </StyledForm>
  );
};

export default NewKeyword;
