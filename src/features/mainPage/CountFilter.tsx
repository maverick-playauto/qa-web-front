import { Radio, RadioChangeEvent } from 'antd';
import { useShopListCountFilter } from 'store/store';
import * as S from './styles/Styles';
import { CountFilterType } from './types/types';

const CountFilter = ({ options }: CountFilterType) => {
  const { count, setFilterOption } = useShopListCountFilter();
  const setFilter = ({ target: { value } }: RadioChangeEvent) => {
    setFilterOption(value);
  };
  return (
    <S.FilterArea>
      <Radio.Group
        options={options}
        onChange={setFilter}
        value={count}
        optionType="button"
        buttonStyle="solid"
      />
    </S.FilterArea>
  );
};

export default CountFilter;
