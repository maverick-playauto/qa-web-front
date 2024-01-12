import { BrowserRouter } from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;
