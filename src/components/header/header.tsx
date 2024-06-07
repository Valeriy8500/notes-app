import * as S from "./styles";
import { ButtonGroup } from "../button-group/button-group";
import { FilterInput } from "../filter-input/filter-input";
import { ConfirmModal } from "../confirm-modal/confirm-modal";
import { useAppSelector } from "../../redux/hooks";
import { selectorDeleteConfirmModal } from "../../redux/selectors";

export const Header = () => {
  const deleteConfirmModalState = useAppSelector(selectorDeleteConfirmModal);

  return (
    <S.Header>
      <ButtonGroup />
      <FilterInput />
      {deleteConfirmModalState && <ConfirmModal />}
    </S.Header>
  );
};
