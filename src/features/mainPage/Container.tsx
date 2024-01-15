import * as S from './styles/Styles';
import ShopList from './ShopList';
import CountFilter from './CountFilter';
import { FILTER_LIST } from 'utils/const/MainPage';

const Container = () => {
  return (
    <S.ContentsArea>
      <CountFilter options={FILTER_LIST} />
      <ShopList />
    </S.ContentsArea>
  );
};

export default Container;
