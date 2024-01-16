import styled from 'styled-components';

export const ContentsArea = styled.section`
  max-height: 65vh;
  margin: 80px 0 40px 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const FilterArea = styled.div`
  float: right;
  margin: 20px 0;
`;

export const PaginationArea = styled.section`
  float: right;
  margin-right: 20px;
`;
