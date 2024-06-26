import PaletteIcon from "@mui/icons-material/Palette";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toogleColorPalette } from "../../redux/notes";
import * as S from "./styles";
import { selectoridSelectedNote } from "../../redux/selectors";

export const ColorPaletteIcon = () => {
  const dispatch = useAppDispatch();
  const idSelectedNote = useAppSelector(selectoridSelectedNote);

  const onOpenPalette = () => {
    dispatch(toogleColorPalette());
  };

  return (
    <S.CustomizedIconButton
      onClick={onOpenPalette}
      title="Выбрать цвет заметки"
      disabled={!idSelectedNote}
    >
      <PaletteIcon />
    </S.CustomizedIconButton>
  );
};
