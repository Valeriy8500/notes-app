import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/Checklist";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { v4 as uuidv4 } from "uuid";
import { INote } from "../../types/types";
import { selectoridSelectedNote, selectorNotes } from "../../redux/selectors";
import {
  addNote,
  clipNote,
  selectNote,
  toogleConfirmDeleteModal,
  toogleHighPriority,
} from "../../redux/notes";
import * as S from "./styles";

export const ButtonGroup = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectorNotes);
  const idSelectedNote = useAppSelector(selectoridSelectedNote);

  const onAddNote = () => {
    const newNote: INote = {
      id: uuidv4(),
      noteName: "Новая заметка",
      currDateTime: null,
      lastEditDateTime: null,
      isSelected: true,
      isClip: false,
      highPriority: false,
      bg: "default",
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

  const onPrioritizeNote = () => {
    dispatch(toogleHighPriority(idSelectedNote));
  };

  const onAddList = () => {};

  const isDisabledPriorityBtn = () => {
    const notePriority = notes.filter(i => i.id === idSelectedNote)[0]?.highPriority;

    if (idSelectedNote && notePriority) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <S.ButtonGroup>
      <S.CustomizedIconButton onClick={onAddNote} title="Добавить">
        <AddIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onDeleteNote} title="Удалить">
        <DeleteIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onClipNote} title="Закрепить">
        <ClipIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton
        onClick={onPrioritizeNote}
        disabled={isDisabledPriorityBtn()}
        title="Высокий приоритет"
      >
        <PriorityHighIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onAddList} title="Добавить список">
        <ListIcon />
      </S.CustomizedIconButton>
    </S.ButtonGroup>
  );
};
