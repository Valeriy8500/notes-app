import * as S from './styles';
import { Header } from '../header/header';
import GlobalStyles from '../../styles/global';

export const App = () => {
  return (
    <>
      <S.App>
        <Header />
      </S.App>

      <GlobalStyles />
    </>
  )
}

