import { NormalButton } from 'components/atoms/Button/Button';

import { NormalSelect } from 'components/atoms/Select/Select';
import { NormalText } from 'components/atoms/Text/Text';

const MainPage = () => {
  return (
    <>
      <NormalButton buttonType="text" />
      <NormalSelect selectType="primary" />
      <NormalText inputType="primary" name="searchShop" />
    </>
  );
};

export default MainPage;
