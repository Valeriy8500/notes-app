import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const NotesSideBar = styled.div`
  width: 20%;
  height: 100%;
  overflow-y: auto;
  border-left: 1px solid rgba(225, 225, 224, 1);
  border-right: 1px solid rgba(225, 225, 224, 1);
  display: flex;
  flex-direction: column;
`;

export const CustomScrollbar = styled(PerfectScrollbar)`
  .ps__thumb-x {
    width: 10px !important;
  }

  .ps__thumb-y {
    width: 10px !important;
  }
`;
