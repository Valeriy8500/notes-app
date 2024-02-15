import * as S from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/DriveFileRenameOutline";
import ClipIcon from "@mui/icons-material/FilePresent";
import ListIcon from "@mui/icons-material/CheckCircleOutline";

export const ButtonGroup = () => {
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
      <S.CustomizedIconButton onClick={onClipNote} title="Закрепить">
        <ClipIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onDeleteNote} title="Удалить">
        <DeleteIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onEditNote} title="Изменить">
        <EditIcon />
      </S.CustomizedIconButton>
      <S.CustomizedIconButton onClick={onAddList} title="Добавить список">
        <ListIcon />
      </S.CustomizedIconButton>
    </>
  );
};
