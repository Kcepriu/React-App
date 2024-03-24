import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: start;

  z-index: 50;

  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  margin-left: auto;
  margin-right: auto;

  background-color: rgba(0, 0, 0, 0.4);

  visibility: visible;
  opacity: 1;
  pointer-events: auto;

  transition-property: opacity;
  transition-duration: 700ms;
  transition-timing-function: ease-in-out;
`;

export const Container = styled.div`
  /* padding: 0 12px; */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: start;
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  height: 100%;
  max-width: 100%;
  overflow-y: auto;
  min-width: 250px;

  background-color: white;
  opacity: 1;

  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  /* 
  transform: translateX(-200%);

  [data-is-open="true"] {
    transform: translateX(5px);
  } */

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    max-width: 95%;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  &:hover {
    scale: 110%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  padding: 8px;
  background-color: #0a144b;
`;

export const Title = styled.h1`
  color: white;
  font-size: 24px;
`;
