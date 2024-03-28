import styled from "styled-components";

export const WrapInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* font-weight: 300; */
`;
export const LineInformation = styled.p`
  align-items: center;
`;

export const Text = styled.span`
  color: gray;
`;

export const NameTask = styled.span`
  color: black;
  font-weight: 600;
  /* display: inline-flex; */
  gap: 4px;
  margin-left: 8px;
  /* align-items: center; */
  /* &::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: black;
  } */
  /* &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid black;
  } */
`;

export const ChangedParameter = styled.span`
  font-weight: 600;
  color: #5c5a5a;
`;

export const DateTask = styled.span`
  font-style: italic;
`;
