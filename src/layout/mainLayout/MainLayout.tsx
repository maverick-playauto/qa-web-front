import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import {
  ExperimentOutlined,
  FileDoneOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MainPage from 'pages/mainPage/MainpPge';
import Home from 'pages/home/Home';
import WorkProgress from 'pages/workProgress/WorkProgress';
import * as S from './styles/MainLayoutStyle';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMovePage = ({ key }: { key: string }) => {
    if (key) {
      navigate(key);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          onClick={handleMovePage}
        />
      </Sider>
      <S.PageContainer>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qa" element={<MainPage />} />
            <Route path="/work-progress" element={<WorkProgress />} />
          </Routes>
        </Layout>
      </S.PageContainer>
    </Layout>
  );
};

export default MainLayout;

function getItem(label: string, key: string, icon?: any, children?: any) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem('홈', '/', <HomeOutlined />),
  getItem('QASystem', '/qa', <ExperimentOutlined />),
  getItem('작업 진행 사항', '/work-progress', <FileDoneOutlined />),
];
