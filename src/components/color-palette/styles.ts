import styled from "styled-components";

export const ColorPalette = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  width: 225px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

export const ColorPaletteBtn = styled.button`
  width: 45%;
  height: 25px;
  align-self: center;
  background-color: #e0282e;
  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
