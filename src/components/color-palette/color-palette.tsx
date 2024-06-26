import { useCallback, useEffect, useRef } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNoteColor, toogleColorPalette } from "../../redux/notes";
import { selectorNotes, selectoridSelectedNote } from "../../redux/selectors";
import * as S from "./styles";
import "react-color-palette/css";

export const ColorPalette = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectorNotes);
  const idSelectedNote = useAppSelector(selectoridSelectedNote);
  const baseColor = notes.filter(i => i.id === idSelectedNote)[0].bg;
  const [color, setColor] = useColor(baseColor);
  const root = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.shiftKey === false) {
        e.preventDefault();
        dispatch(addNoteColor(color.hex));
        dispatch(toogleColorPalette());
      }
    },
    [dispatch, color.hex]
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (root.current) root.current.contains(element) || dispatch(toogleColorPalette());
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener("keydown", onEnter);

    return () => {
      document.removeEventListener("keydown", onEnter);
    };
  }, [onEnter]);

  return (
    <S.ColorPalette ref={root}>
      <ColorPicker color={color} onChange={setColor} height={200} hideAlpha hideInput />
      <S.ColorPaletteBtn onClick={() => dispatch(addNoteColor(color.hex))}>
        Сохранить
      </S.ColorPaletteBtn>
    </S.ColorPalette>
  );
};
