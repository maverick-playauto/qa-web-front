import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import {
  ExperimentOutlined,
  FileDoneOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from 'pages/Mainpage';
import Sites from 'pages/WorkProgress';
import Home from 'pages/Home';
import WorkProgress from 'pages/WorkProgress';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

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
          defaultSelectedKeys={['/']}
          mode="inline"
          items={items}
          onClick={handleMovePage}
        />
      </Sider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qa" element={<MainPage />} />
          <Route path="/work-progress" element={<WorkProgress />} />
        </Routes>
      </Layout>
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
