import { NormalButton } from '../atoms/Button/Button.style';
import SearchForm from '../molecules/SearchForm';

const TopBar = () => {
  return (
    <section>
      <NormalButton fontSize="xl" bgColor="skyblue">
        등록
      </NormalButton>
      <SearchForm />
    </section>
  );
};

export default TopBar;
