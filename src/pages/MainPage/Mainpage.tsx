import { NormalButton } from 'components/atoms/Button/Button';

import { NormalSelect } from 'components/atoms/Select/Select';
import { NormalText } from 'components/atoms/Text/Text';

const MainPage = () => {
  return (
    <>
      <NormalButton variant="primary" />
      <NormalSelect variant="primary" width="large" />
      <NormalText variant="primary" name="searchShop" />
    </>
  );
};

export default MainPage;
