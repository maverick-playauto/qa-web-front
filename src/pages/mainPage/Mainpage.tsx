import ShopList from 'components/table/ShopList';
import * as S from './MainPageStyle';
import RadioFilter from 'components/filter/RadioFilter';

const MainPage = () => {
  return (
    <main>
      <h1>QASys</h1>
      <hr />
      <S.ContentsArea>
        <S.FilterArea>
          <RadioFilter options={FILTER_LIST} />
        </S.FilterArea>
        <ShopList />
      </S.ContentsArea>
    </main>
  );
};

export default MainPage;

const FILTER_LIST = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];
