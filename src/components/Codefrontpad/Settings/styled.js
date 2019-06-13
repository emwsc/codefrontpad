import styled from "styled-components";

export const StyledSection = styled.div`
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 10px;
  & > i {
    margin-right: 10px;
  }
`;

export const StyledKeyword = styled.div`
  cursor: pointer;
  margin: 2px 0;
  padding: 2px;
  user-select: none;

  &:hover {
    background: #558c8c;
  }
  & > i {
    margin-right: 5px;
  }
`;
