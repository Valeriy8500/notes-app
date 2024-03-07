import * as S from "./styles";
import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/DriveFileRenameOutline";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/CheckCircleOutline";
import { useAppDispatch } from "../../redux/hooks";
import { getCurrDateTime } from "../../shared/shared-functions";
import { addNote } from "../../redux/notes";
import { v4 as uuidv4 } from 'uuid';

export const ButtonGroup = () => {
  const dispatch = useAppDispatch();

  const onAddNote = () => {
    console.log("onAddNote");

    const newNote = {
      id: uuidv4(),
      noteName: "Новая заметка",
      currDateTime: getCurrDateTime(),
    };

    dispatch(addNote(newNote));
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
