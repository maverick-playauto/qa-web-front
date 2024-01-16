import * as S from './styles/Styles';
import ShopList from './ShopList';
import { useQuery } from 'react-query';
import { sendUrl } from 'api/api';
import type { Method } from 'api/types/types';
import { useEffect, useState } from 'react';
import { DataType } from './types/types';
import MainPagination from './MainPagination';

const Container = () => {
  const [paginationConfig, setPaginationConfig] = useState({
    currentPage: 1,
    pageSize: 10,
  });
  const [filteredData, setFilteredData] = useState<DataType[]>([]);

  //데이터 통신
  const url =
    process.env.NODE_ENV === 'production' ? '' : '/data/shopList.json';
  const method: Method = 'GET';
  const { data = { data: [] }, isLoading } = useQuery({
    queryKey: ['/getShopList'],
    queryFn: () => sendUrl(url, method),
    refetchOnMount: false,
  });

  useEffect(() => {
    getFilterdData(paginationConfig.currentPage, paginationConfig.pageSize);
  }, [isLoading, paginationConfig]);

  const getFilterdData = (currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return setFilteredData(data.data.slice(startIndex, endIndex));
  };

  return (
    <>
      <S.ContentsArea>
        {!isLoading && <ShopList dataSource={filteredData} />}
      </S.ContentsArea>
      {!isLoading && (
        <MainPagination
          setPaginationConfig={setPaginationConfig}
          total={data.data.length}
        />
      )}
    </>
  );
};

export default Container;
