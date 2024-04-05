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
            <S.DateTime>{formatDate(item.currDateTime)}</S.DateTime>
            <S.Title>{item.content.title}</S.Title>

            {/* <Slate editor={editor} initialValue={initialValue}>
              <Editable
                onKeyDown={event => {
                  console.log(event.key);
                }}
              />
            </Slate> */}

            <RichText />
          </S.NoteEditor>
        ) : null;
      })}
    </>
  );
};
