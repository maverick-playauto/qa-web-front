import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/Mainpage';
import Sites from './pages/Sites/Sites';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/site/:sitecode" element={<Sites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
