import React from "react";
import {
  StyledContainer,
  StyledBox,
  StyledCore,
  StyledSquare1,
  StyledSquare2
} from "./styled";

const Spinner = () => (
  <StyledContainer>
    <StyledBox>
      <StyledSquare1>
        <StyledCore />
      </StyledSquare1>
      <StyledSquare2>
        <StyledCore />
      </StyledSquare2>
    </StyledBox>
  </StyledContainer>
);

export default Spinner;
