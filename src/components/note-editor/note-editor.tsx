import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectorNotes } from "../../redux/selectors";
import { formatDate } from "../../shared/shared-functions";
import { INote } from "../../types/types";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import * as S from "./styles";

export const NoteEditor = () => {
  const notes = useAppSelector(selectorNotes);
  const [editor] = useState(() => withReact(createEditor()))

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
