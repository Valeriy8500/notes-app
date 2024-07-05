import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { INote } from "../../types/types";
import { selectNote, toogleHighPriority, unClipNote } from "../../redux/notes";
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

  const onRemovePriority = (id: string) => {
    dispatch(toogleHighPriority(id));
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
            <S.HighPriorityBlock>
              {item.highPriority && (
                <S.HighPriorityIconButton
                  onClick={() => onRemovePriority(item.id)}
                  title="Убрать высокий приоритет"
                >
                  <S.HighPriorityIcon />
                </S.HighPriorityIconButton>
              )}
            </S.HighPriorityBlock>

            <S.MainBlock>
              <S.Title>{item.noteName}</S.Title>
              <S.Footer>
                <S.DateTime>{item.currDateTime}</S.DateTime>
                {item.isClip && (
                  <S.PushPinIconButton onClick={() => onUnclipNote(item.id)} title="Открепить">
                    <S.PushPinIcon />
                  </S.PushPinIconButton>
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
