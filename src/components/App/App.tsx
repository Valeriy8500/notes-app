import * as S from "./styles";
import { Header } from "../header/header";
import { NotesSideBar } from "../notes-sidebar/notes-sidebar";
import GlobalStyles from "../../styles/global";

export const App = () => {
  return (
    <>
      <S.App>
        <Header />
        <NotesSideBar />
      </S.App>

      <GlobalStyles />
    </>
  );
};
