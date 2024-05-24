import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { formatDate } from "../../shared/shared-functions";
import { INote } from "../../types/types";
import RichText from "../rich-text/rich-text";
import * as S from "./styles";

export const NoteEditor = () => {
  const notes = useAppSelector(selectorNotes);
  console.log("notes: ", notes);

  return (
    <>
      {notes.map((item: INote) => {
        return item.isSelected ? (
          <S.NoteEditor key={item.id}>
            <S.DateTime>{formatDate(item.currDateTime)}</S.DateTime>
            <RichText noteId={item.id} />
          </S.NoteEditor>
        ) : null;
      })}
    </>
  );
};
