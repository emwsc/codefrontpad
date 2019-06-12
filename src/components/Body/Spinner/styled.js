import styled, { keyframes } from "styled-components";

const ConfigureClockwise = keyframes`
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
    `;

const ConfigureXclockwise = keyframes`
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;
`;

export const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StyledSquare1 = styled.div`
  width: 115px;
  height: 115px;
  padding: 3px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #82204a;
  animation: ${ConfigureClockwise} 3s ease-in-out 0s infinite alternate;
`;

export const StyledSquare2 = styled.div`
  width: 115px;
  height: 115px;
  padding: 3px;
  left: -115px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 249, 220);
  transform: rotate(45deg);
  animation: ${ConfigureXclockwise} 3s ease-in-out 0s infinite alternate;
`;

export const StyledCore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #231123;
`;
