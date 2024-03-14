import * as S from "./styles";
import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/DriveFileRenameOutline";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/CheckCircleOutline";
import { useAppDispatch } from "../../redux/hooks";
import { getCurrDateTime } from "../../shared/shared-functions";
import { addNote, selectNote } from "../../redux/notes";
import { v4 as uuidv4 } from 'uuid';
import { INote } from "../../types/types";

export const ButtonGroup = () => {
  const dispatch = useAppDispatch();

  const onAddNote = (): void => {
    const newNote: INote = {
      id: uuidv4(),
      noteName: "Новая заметка",
      currDateTime: getCurrDateTime(),
      isSelected: true,
      content: {
        title: "Новая заметка"
      }
    };

    dispatch(addNote(newNote));
    dispatch(selectNote(newNote));
  };

  const onClipNote = () => {
    console.log("onClipNote");
  };

  const onDeleteNote = () => {
    console.log("onDeleteNote");
  };

  const onEditNote = () => {
    console.log("onEditNote");
  };

  const onAddList = () => {
    console.log("onAddList");
  };

  return (
    <>
      <S.CustomizedIconButton onClick={onAddNote} title="Добавить">
        <AddIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onEditNote} title="Изменить">
        <EditIcon />
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
