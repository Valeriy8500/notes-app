import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { formatDate } from "../../shared/shared-functions";
import { INote } from "../../types/types";
import * as S from "./styles";

export const NoteEditor = () => {
  const notes = useAppSelector(selectorNotes);
  console.log('formatDate: ', formatDate('07.08.2024, 17:47'));

  return (
    <>
      {notes.map((item: INote) => {
        return (
          <S.NoteEditor key={item.id}>
            <S.DateTime>{formatDate(item.currDateTime)}</S.DateTime>
            <S.Title>{item.content.title}</S.Title>
          </S.NoteEditor>
        );
      })}
    </>
  );
};
