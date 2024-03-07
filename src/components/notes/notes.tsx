import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { INote } from "../../types/types";
import * as S from "./styles";

export const Notes = () => {
  const notes = useAppSelector(selectorNotes);
  console.log("notes: ", notes);

  const selectNote = () => {

  };

  return (
    <>
      {notes.map((item: INote) => {
        return (
          <S.Note
            key={item.id}
            $isSelected={item.isSelected}
            onClick={selectNote}
          >
            <S.IconBlock></S.IconBlock>
            <S.MainBlock>
              <S.Title>{item.noteName}</S.Title>
              <S.DateTime>{item.currDateTime}</S.DateTime>
            </S.MainBlock>
          </S.Note>
        );
      })}
    </>
  );
};
