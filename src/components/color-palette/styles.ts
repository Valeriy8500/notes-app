import styled from "styled-components";

export const ColorPalette = styled.div`
  position: absolute;
  top: 110px;
  left: 250px;
  width: 225px;
  display: flex;
  flex-direction: column;
  z-index: 999;

  .rcp-body {
    height: 300px;
  }
`;

export const ColorPaletteBtn = styled.button`
  width: 50%;
  align-self: center;
  color: #e0282e;
`;

