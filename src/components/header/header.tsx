import * as S from "./styles";
import { ButtonGroup } from "../button-group/button-group";
import { FilterInput } from "../filter-input/filter-input";

export const Header = () => {
  return (
    <S.Header>
      <ButtonGroup />
      <FilterInput />
    </S.Header>
  );
};
