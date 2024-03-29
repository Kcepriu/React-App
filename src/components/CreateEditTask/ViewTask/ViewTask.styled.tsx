import styled from "styled-components";

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const WrapInformation = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LineInformation = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const TitleLine = styled.div`
  color: #5a5959;
  display: flex;
  gap: 12px;
  width: 150px;
`;

export const TitleDescription = styled.h3`
  margin-top: 24px;
`;

export const WrapDescription = styled.div`
  margin-top: 16px;
  height: 155px;
`;

export const Priority = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;
