import * as S from "./styles";
import { Header } from "../header/header";
import { NotesSideBar } from "../notes-sidebar/notes-sidebar";
import { NoteEditor } from "../note-editor/note-editor";
import GlobalStyles from "../../styles/global";

export const App = () => {
  return (
    <>
      <S.App>
        <Header />
        <NotesSideBar />
        <NoteEditor />
      </S.App>

      <GlobalStyles />
    </>
  );
};
