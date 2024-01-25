import { Pagination } from 'antd';
import { MainPaginationType } from './types/types';
import * as S from './styles/Styles';

const MainPagination = ({ setPaginationConfig, total }: MainPaginationType) => {
  const handlePage = (page: number, pageSize: number) => {
    setPaginationConfig(prev => ({
      ...prev,
      currentPage: page,
      pageSize: pageSize,
    }));
    /*
    setFilteredShopList(prev => ({
      ...prev.filter(
        item => item.key >= page * pageSize && item.key < (page + 1) * pageSize,
      ),
    }));
    */
  };

  return (
    <S.PaginationArea>
      <Pagination defaultCurrent={1} total={total} onChange={handlePage} />
    </S.PaginationArea>
  );
};

export default MainPagination;
