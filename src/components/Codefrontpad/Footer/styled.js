import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #231123;
  border-top: 1px solid #82204a;
  bottom: 0px;
  font-size: 12px;
  padding-bottom: 2px;
  padding-top: 2px;
  position: fixed;
  text-align: center;
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
