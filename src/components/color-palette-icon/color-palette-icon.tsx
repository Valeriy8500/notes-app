import PaletteIcon from '@mui/icons-material/Palette';
import { useAppDispatch } from "../../redux/hooks";
import { toogleColorPalette } from '../../redux/notes';
import * as S from "./styles";

export const ColorPaletteIcon = () => {
  const dispatch = useAppDispatch();

  const onOpenPalette = () => { 
    dispatch(toogleColorPalette());
  };

  return (
    <S.CustomizedIconButton onClick={onOpenPalette} title="Выбрать цвет">
      <PaletteIcon />
    </S.CustomizedIconButton>
  );
};
