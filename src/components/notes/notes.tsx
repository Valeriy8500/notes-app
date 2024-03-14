import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { INote } from "../../types/types";
import { selectNote } from "../../redux/notes";
import * as S from "./styles";

export const Notes = () => {
  const notes = useAppSelector(selectorNotes);
  const dispatch = useAppDispatch();
  console.log("notes: ", notes);

  const onSelectNote = (item: INote) => {
    dispatch(selectNote(item));
  };

  return (
    <>
      {notes.map((item: INote) => {
        return (
          <S.Note
            key={item.id}
            $isSelected={item.isSelected}
            onClick={() => onSelectNote(item)}
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
