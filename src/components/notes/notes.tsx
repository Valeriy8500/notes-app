import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { INote } from "../../types/types";
import { selectNote, unClipNote } from "../../redux/notes";
import * as S from "./styles";

export const Notes = () => {
  const notes = useAppSelector(selectorNotes);
  const dispatch = useAppDispatch();

  const onSelectNote = (item: INote) => {
    dispatch(selectNote(item));
  };

  const onUnclipNote = (id: string) => {
    dispatch(unClipNote(id));
  };

  const colorBlockBackgroundColor = (item: INote) => {
    if (item.bg !== "default") {
      return { backgroundColor: item.bg };
    }
    if (item.bg === "default" && item.isSelected) {
      return { backgroundColor: "#e1e1df" };
    }
    if (item.bg === "default" && !item.isSelected) {
      return { backgroundColor: "#fff" };
    }
  };

  return (
    <>
      {notes.map((item: INote) => {
        return (
          <S.Note key={item.id} $isSelected={item.isSelected} onClick={() => onSelectNote(item)}>
            <S.IconBlock />

            <S.MainBlock>
              <S.Title>{item.noteName}</S.Title>
              <S.Footer>
                <S.DateTime>{item.currDateTime}</S.DateTime>
                {item.isClip && (
                  <S.CustomizedIconButton onClick={() => onUnclipNote(item.id)} title="Открепить">
                    <S.PushPin />
                  </S.CustomizedIconButton>
                )}
              </S.Footer>
            </S.MainBlock>

            <S.ColorBlock style={colorBlockBackgroundColor(item)} />
          </S.Note>
        );
      })}
    </>
  );
};
