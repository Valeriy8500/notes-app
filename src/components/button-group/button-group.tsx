import * as S from "./styles";
import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/Checklist";
import { useAppDispatch } from "../../redux/hooks";
import { getCurrDateTime } from "../../shared/shared-functions";
import { addNote, selectNote, deleteNote } from "../../redux/notes";
import { v4 as uuidv4 } from "uuid";
import { INote } from "../../types/types";

export const ButtonGroup = () => {
  const dispatch = useAppDispatch();

  const onAddNote = () => {
    const newNote: INote = {
      id: uuidv4(),
      noteName: "Новая заметка",
      currDateTime: getCurrDateTime(),
      isSelected: true,
      content: [],
    };

    dispatch(addNote(newNote));
    dispatch(selectNote(newNote));
  };

  const onDeleteNote = () => {
    dispatch(deleteNote());
  };

  const onClipNote = () => {};

  const onAddList = () => {};

  return (
    <>
      <S.CustomizedIconButton onClick={onAddNote} title="Добавить">
        <AddIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onDeleteNote} title="Удалить">
        <DeleteIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onClipNote} title="Закрепить">
        <ClipIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onAddList} title="Добавить список">
        <ListIcon />
      </S.CustomizedIconButton>
    </>
  );
};
