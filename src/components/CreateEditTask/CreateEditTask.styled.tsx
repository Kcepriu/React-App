import styled from "styled-components";

export const WrapPage = styled.div`
  width: 750px;
  display: flex;
`;

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapTask = styled.div`
  width: 60%;
  padding: 24px;
`;

export const WrapHistory = styled.div`
  width: 40%;
  padding: 24px 12px;

  background-color: #b6b6b6;
`;

export const WrapInformation = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LineInformation = styled.div`
  display: flex;
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
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    color: #bbb2e9;
  }
`;
