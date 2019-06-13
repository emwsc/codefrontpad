import styled from "styled-components";

export const StyledHeader = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: -2px;
`;

export const StyledTitle = styled.div`
  color: #eff7ff;
  font-size: 40px;
`;

export const StyledSettings = styled.button`
  background: transparent;
  border: none;
  color: #eff7ff;
  cursor: pointer;
  & > i {
    margin-right: 5px;
  }
`;
