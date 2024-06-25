import { ButtonGroup } from "../button-group/button-group";
import { FilterInput } from "../filter-input/filter-input";
import { ConfirmModal } from "../confirm-modal/confirm-modal";
import { useAppSelector } from "../../redux/hooks";
import { selectorColorPalette, selectorDeleteConfirmModal } from "../../redux/selectors";
import { ColorPaletteIcon } from "../color-palette-icon/color-palette-icon";
import { ColorPalette } from "../color-palette/color-palette";
import * as S from "./styles";

export const Header = () => {
  const deleteConfirmModalState = useAppSelector(selectorDeleteConfirmModal);
  const colorPaletteState = useAppSelector(selectorColorPalette);

  return (
    <S.Header>
      <S.MainGroup>
        <ButtonGroup />
        <FilterInput />
      </S.MainGroup>
      <ColorPaletteIcon />
      {colorPaletteState && <ColorPalette />}
      {deleteConfirmModalState && <ConfirmModal />}
    </S.Header>
  );
};
