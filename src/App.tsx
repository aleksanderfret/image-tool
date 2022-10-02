import React, { FC } from 'react';
import { Layout } from 'antd';

import './App.scss';

const { Content, Header, Sider } = Layout;

const App: FC = () => {
  return (
    <div>
      <Header>
        <h1>Welcome to Image Tool</h1>
      </Header>
      <Layout>
        <Content></Content>
        <Sider style={{ minHeight: '100vh' }}>Right</Sider>
      </Layout>
    </div>
  );
};

export default App;
