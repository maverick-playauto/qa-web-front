import { Radio, RadioChangeEvent } from 'antd';
import { useShopListCountFilter } from 'store/store';

type RadioFilterType = {
  options: { label: string; value: number }[];
};

const RadioFilter = ({ options }: RadioFilterType) => {
  const { count, setFilterOption } = useShopListCountFilter();
  const setFilter = ({ target: { value } }: RadioChangeEvent) => {
    setFilterOption(value);
  };
  return (
    <Radio.Group
      options={options}
      onChange={setFilter}
      value={count}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default RadioFilter;
