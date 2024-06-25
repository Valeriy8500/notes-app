import { useEffect, useRef } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { addColor, getSiteColor } from "@/entities/site/model/site.selectors";
import * as S from "./styles";
import "react-color-palette/css";
import { addNoteColor, toogleColorPalette } from "../../redux/notes";

export const ColorPalette = () => {
  const dispatch = useAppDispatch();
  // const baseColor = useAppSelector(getSiteColor);
  const [color, setColor] = useColor('white');
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (root.current) root.current.contains(element) || dispatch(toogleColorPalette());
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <S.ColorPalette ref={root}>
      <ColorPicker color={color} onChange={setColor} height={200} />
      <S.ColorPaletteBtn onClick={() => dispatch(addNoteColor(color.hex))}>
        Сохранить
      </S.ColorPaletteBtn>
    </S.ColorPalette>
  );
};
