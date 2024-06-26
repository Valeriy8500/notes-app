import { useCallback, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../redux/hooks";
import { deleteNote, toogleConfirmDeleteModal } from "../../redux/notes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";

export const ConfirmModal = () => {
  const dispatch = useAppDispatch();

  const onDeleteNote = useCallback(() => {
    dispatch(deleteNote());
    dispatch(toogleConfirmDeleteModal());
    toast.success(`Заметка успешно удалена!`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }, [dispatch]);

  const onEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }
      dispatch(toogleConfirmDeleteModal());
    },
    [dispatch]
  );

  const onEnter = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.shiftKey === false) {
        e.preventDefault();
        onDeleteNote();
      }
    },
    [onDeleteNote]
  );

  useEffect(() => {
    document.addEventListener("keydown", onEscape);
    document.addEventListener("keydown", onEnter);

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("keydown", onEnter);
    };
  }, [onEscape, onEnter]);

  return (
    <S.ConfirmModal>
      <S.Container>
        <S.Header>
          <S.Title>Подтвердить</S.Title>
          <S.CloseButton onClick={() => dispatch(toogleConfirmDeleteModal())}>
            <CloseIcon />
          </S.CloseButton>
        </S.Header>
        <S.Content>Вы уверены, что хотите удалить эту заметку?</S.Content>
        <S.Footer>
          <S.ConfirmButton type="button" onClick={onDeleteNote}>
            Да
          </S.ConfirmButton>
          <S.ConfirmButton type="button" onClick={() => dispatch(toogleConfirmDeleteModal())}>
            Нет
          </S.ConfirmButton>
        </S.Footer>
      </S.Container>
    </S.ConfirmModal>
  );
};
