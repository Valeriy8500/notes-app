import { Header } from "../header/header";
import { NotesSideBar } from "../notes-sidebar/notes-sidebar";
import { NoteEditor } from "../note-editor/note-editor";
import GlobalStyles from "../../styles/global";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from "./styles";

export const App = () => {
  return (
    <Provider store={store}>
      <S.App>
        <Header />
        <NotesSideBar />
        <NoteEditor />
      </S.App>

      <ToastContainer />
      <GlobalStyles />
    </Provider>
  );
};
