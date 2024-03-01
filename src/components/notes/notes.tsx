import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import * as S from "./styles";

export const Notes = () => {
  const notes = useAppSelector(selectorNotes);
  console.log('notes: ', notes);

  return (
    <>
      {notes.map((i: any) => {
        return (
          <S.Note>
            <S.Title>{i.noteName}</S.Title>
            <S.DateTime>{i.currDateTime}</S.DateTime>
          </S.Note>
        );
      })}
    </>
  );
};