import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/Checklist";
import { useAppDispatch } from "../../redux/hooks";
import { getCurrDateTime } from "../../shared/shared-functions";
import { addNote, clipNote, selectNote, toogleConfirmDeleteModal } from "../../redux/notes";
import { v4 as uuidv4 } from "uuid";
import { INote } from "../../types/types";
import * as S from "./styles";

export const ButtonGroup = () => {
  const dispatch = useAppDispatch();

  const onAddNote = () => {
    const newNote: INote = {
      id: uuidv4(),
      noteName: "Новая заметка",
      currDateTime: getCurrDateTime(),
      isSelected: true,
      isClip: false,
      content: [],
    };

    dispatch(addNote(newNote));
    dispatch(selectNote(newNote));
  };

  const onDeleteNote = () => {
    dispatch(toogleConfirmDeleteModal());
  };

  const onClipNote = () => {
    dispatch(clipNote());
  };

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
