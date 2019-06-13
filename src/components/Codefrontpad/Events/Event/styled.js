import styled from "styled-components";
import { buttonStyles } from "../../../../common/styles";

export const StyledEventTitle = styled.a`
  color: #e8db7d;
  margin-bottom: 15px;
`;

export const StyledEventDescription = styled.div`
  grid-column: 1 / 3;
  margin-bottom: 20px;
`;

export const StyledDetails = styled.div`
  font-size: 13px;
  ${({ isDetailsExpanded }) => !isDetailsExpanded && "max-height: 25px;"}
  overflow: hidden;
  position: relative;
  ${({ isDetailsExpanded }) =>
    !isDetailsExpanded &&
    `
  &:after {
    background: rgb(35, 17, 35);
    background: linear-gradient(
      180deg,
      rgba(35, 17, 35, 0.40379901960784315) 1%,
      rgba(35, 17, 35, 0.7175245098039216) 24%,
      rgba(35, 17, 35, 0.9108018207282913) 46%,
      rgba(35, 17, 35, 1) 63%,
      rgba(35, 17, 35, 1) 78%
    );
    content: "";
    height: 20px;
    position: absolute;
    top: 15px;
    width: 100%;
  }
  `}
`;

export const StyledButtons = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 330px;
`;

export const StyledShowDetails = styled.button`
  ${buttonStyles}
  width: 150px;
`;

export const StyledOpenEvent = styled.a`
  ${buttonStyles}
  width: 150px;
  text-decoration: none;
`;
