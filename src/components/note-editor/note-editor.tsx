import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { formatDate } from "../../shared/shared-functions";
import { INote } from "../../types/types";
import RichText from "../rich-text/rich-text";
import * as S from "./styles";

export const NoteEditor = () => {
  const notes = useAppSelector(selectorNotes);

  return (
    <>
      {notes.map((item: INote) => {
        return item.isSelected ? (
          <S.NoteEditor key={item.id}>
            <S.DateTimeBlock>
              <S.DateTime>{item.currDateTime ? `Создано: ${formatDate(item.currDateTime)}` : ''}</S.DateTime>
              <S.DateTime>
                {item.lastEditDateTime ? `Изменено: ${formatDate(item.lastEditDateTime)}` : ''}
              </S.DateTime>
            </S.DateTimeBlock>
            <RichText noteId={item.id} />
          </S.NoteEditor>
        ) : null;
      })}
    </>
  );
};
