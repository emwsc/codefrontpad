import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: minmax(250px, 1fr) 1fr;
  grid-template-rows: repeat(auto-fit, minmax(25px, auto) minmax(25px, auto));
  min-height: 100%;
`;

export const StyledTableHeader = styled.div`
  color: #959595c7;
  font-weight: bold;
  margin-bottom: 20px;
`;
