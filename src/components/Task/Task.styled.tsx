import styled from "styled-components";

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
`;

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: white;
  &:hover {
    color: #bbb2e9;
  }
`;

export const WrapDate = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 4px 0;
`;
