import * as S from './styles/Styles';
import ShopList from './ShopList';
import CountFilter from './CountFilter';
import { useQuery } from 'react-query';
import { FILTER_LIST } from 'utils/const/MainPage';
import { sendUrl } from 'api/api';
import { useShopListCountFilter } from 'store/store';
import type { Method } from 'api/types/types';
import { useState } from 'react';
import { DataType } from './types/types';

const Container = () => {
  const [filteredShopList, setFilteredShopList] = useState<DataType[]>([]);
  const { count } = useShopListCountFilter();

  //데이터 통신
  const url =
    process.env.NODE_ENV === 'production' ? '' : '/data/shopList.json';
  const method: Method = 'GET';
  const { data = { data: [] }, isLoading } = useQuery<any, Error>({
    queryKey: ['/getShopList'],
    queryFn: () => sendUrl(url, method),
    refetchOnMount: false,
  });

  return (
    <>
      <section>
        <CountFilter options={FILTER_LIST} />
      </section>
      <S.ContentsArea>
        {isLoading ? 'loading' : <ShopList dataSource={data.data} />}
      </S.ContentsArea>
      <section>페이지네이션</section>
    </>
  );
};

export default Container;
