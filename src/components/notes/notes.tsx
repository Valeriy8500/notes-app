import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import * as S from "./styles";

export const Notes = () => {
  const notes = useAppSelector(selectorNotes);
  console.log("notes: ", notes);

  return (
    <>
      {notes.map((item: any) => {
        return (
          <S.Note key={item.id}>
            <S.Title>{item.noteName}</S.Title>
            <S.DateTime>{item.currDateTime}</S.DateTime>
          </S.Note>
        );
      })}
    </>
  );
};
