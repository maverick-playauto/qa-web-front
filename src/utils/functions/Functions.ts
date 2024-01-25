/**
 *
 * @param totalItemCount 총 Item 갯수
 * @param pageFilter 페이지에 노출시킬 Item 수
 */
export const calculateTotalPage = (totalItem: number, pageFilter: number) => {
  let totalPage = 0;
  if (!!totalItem) {
    totalPage =
      totalItem % pageFilter === 0
        ? totalItem / pageFilter
        : Math.floor(totalItem / pageFilter + 1);
  }
  return totalPage;
};
