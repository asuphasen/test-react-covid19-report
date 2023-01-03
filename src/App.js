import React, { useState, useEffect } from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import InputPage from "./components/InputPage";
import C19ProvincePage from "./components/C19ProvincePage";
import EmpInformationPage from "./components/EmpInformationPage";

import 'antd/dist/antd.css';
import './App.css'

const App = () => {
  const [navState, setNavState] = useState('2')

  const handleClick = e => {
    console.log('click ', e.key);
    setNavState(e.key);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case '1':
        return <C19ProvincePage />;
      case '2':
        return <EmpInformationPage />;
      case '3':
        return <InputPage />;
      default:
        return true;
    }
  }

  return (
    <>
      <Menu style={{ width: '100vw' }} onClick={handleClick} selectedKeys={[navState]} mode="horizontal">
        <Menu.Item key="1">
          จำนวนผู้ป่วยโควิด-19 แต่ละจังหวัด
        </Menu.Item>
        <Menu.Item key="2">
          ข้อมูลพนักงาน
        </Menu.Item>
        <Menu.Item key="3">
          ทดสอบ
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Go to Ant Design
          </a>
        </Menu.Item>
      </Menu>
      {renderSwitch(navState)}
    </>
  )
}

export default App;