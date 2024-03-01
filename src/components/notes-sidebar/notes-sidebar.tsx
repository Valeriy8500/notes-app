import * as S from "./styles";
import { Notes } from "../notes/notes";
import "react-perfect-scrollbar/dist/css/styles.css";

export const NotesSideBar = () => {
  return (
    <S.NotesSideBar>
      <S.CustomScrollbar>
        <Notes />
      </S.CustomScrollbar>
    </S.NotesSideBar>
  );
};
