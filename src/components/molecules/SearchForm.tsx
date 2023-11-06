import { NormalButton } from '../atoms/Button/Button.style';
import { NormalInput } from '../atoms/Input/Input.style';
import { NormalSelect } from '../atoms/Select/Select.style';

const SearchForm = () => {
  return (
    <div>
      <NormalSelect fontSize="xl">
        {SEARCH_FILTER.map(filterMenu => (
          <option key={filterMenu.value} value={filterMenu.value}>
            {filterMenu.name}
          </option>
        ))}
      </NormalSelect>
      <NormalInput fontSize="xl" />
      <NormalButton fontSize="xl" bgColor="skyblue">
        검색
      </NormalButton>
    </div>
  );
};

export default SearchForm;

const SEARCH_FILTER = [
  { name: '쇼핑몰명', value: 'shopName' },
  { name: '쇼핑몰코드', value: 'shopCode' },
  { name: 'API여부', value: 'isAPI' },
  { name: '엔진적용여부', value: 'isAppliedEngine' },
];
