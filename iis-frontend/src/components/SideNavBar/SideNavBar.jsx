import React, { useState } from 'react';
import foldImg from '../../assets/sigmahealthpro-converted-3@2x.png'
import unfoldImg from '../../assets/sigmahealthpro-converted-4@2x.png'
import dashboard from '../../assets/dashboard.png'
import enrollmentRequest from '../../assets/enrollmentRequest.png'
import patientManagement from '../../assets/patientManagement.png'
import vaccineManagement from '../../assets/vaccineManagement.png'
import siteManagement from '../../assets/siteManagement.png'
import userManagement from '../../assets/userManagement.png'
import accessManagement from '../../assets/accessManagement.png'
import referenceData from '../../assets/referenceData.png'
import vaccineForecasting from '../../assets/vaccineForecasting.png'
import userImg from '../../assets/user@2x.png'
import reports from '../../assets/reports.png'
import {  Input, Dropdown, Avatar } from 'antd';
import './SideNavBar.css'
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import ManageSiteTable from '../ManageSite/ManageSiteTable';
const { Header, Content, Footer, Sider } = Layout;



const SideNavBar = () => {
    const { Header } = Layout;
    const { Search } = Input;
    const [collapsed, setCollapsed] = useState(false);
    const {token: { colorBgContainer },} = theme.useToken();
    const navigate=useNavigate();
    const userMenu = (
      <Menu>
        <Menu.Item key="0">
          <a href="/profile">Profile</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/settings">Settings</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Logout</Menu.Item>
      </Menu>
    );
    
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#e9e9e9', width: collapsed ? '110px' : '200px' }}>
        <div className="demo-logo-vertical" />
             <img 
            src={collapsed ? unfoldImg : foldImg} 
            onClick={() => setCollapsed(!collapsed)}
            alt="Toggle Menu" 
            style={collapsed ? { width: '32px', height: '40px', marginTop : '18px', marginLeft: '23px', marginBottom:'26px'} : { width: '148px', height: '36px', marginTop : '18px', marginLeft: '22px', marginBottom:'26px'}}/>
        <Menu
          
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: collapsed && <img src={dashboard} alt="User" style={{ width: '30px', height: '30px' }} />,
              label: !collapsed && 'Dashboard',
              onClick: () => navigate('/dashboard'),
            },
            {
                key: '2',
                icon: collapsed && <img src={enrollmentRequest} alt="User" style={{ width: '30px', height: '30px'}} />,
                label: !collapsed && 'Enrollment Request',
              },
              {
                key: '3',
                icon: collapsed && <img src={patientManagement} alt="User" style={{ width: '30px', height: '30px'}} />,
                label: !collapsed && 'Patient Management',
              },
              {
                key: '4',
                icon: collapsed && <img src={vaccineManagement} alt="User" style={{ width: '30px', height: '30px' }} />,
                label: !collapsed && 'Vaccine Management',
              },
              {
                key: '5',
                icon: collapsed && <img src={siteManagement} alt="User" style={{ width: '30px', height: '30px' }} />,
                label: !collapsed && 'Site Management',
              },
              {
                key: '6',
                icon: collapsed && <img src={userManagement} alt="User" style={{ width: '30px', height: '30px'}} />,
                label: !collapsed && 'User Management',
              },
              {
                key: '7',
                icon: collapsed && <img src={accessManagement} alt="User" style={{ width: '30px', height: '30px' }} />,
                label: !collapsed && 'Access Management',
              },
              {
                key: '8',
                icon: collapsed && <img src={referenceData} alt="User" style={{ width: '30px', height: '30px'}} />,
                label: !collapsed && 'Reference Data',
              },
              {
                key: '9',
                icon: collapsed && <img src={vaccineForecasting} alt="User" style={{width: '30px', height: '30px' }} />,
                label: !collapsed && 'Vaccine Forecasting',
              },
              {
                key: '10',
                icon: collapsed && <img src={reports} alt="User" style={{ width: '30px', height: '30px'}} />,
                label: !collapsed && 'Reports',
              },
              
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: '26px',
            color:'#4d4d4d',
            fontWeight:'600',
            display:'flex',
            fontSize:'larger',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 12px 0 rgba(0,0,0,0.2)',
            background: 'rgb(255,255,255)',
          }}
        >
          <div >
                    <div style={{ fontWeight: 'bold', fontSize: '24px', marginRight: '24px' }}>Manage Site</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Search
                        placeholder="Search..."
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                
                
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <span style={{ marginLeft: '8px' }}>bibek@gmail.com</span>
                            <Avatar  src={userImg} />
                            
                        </a>
                    </Dropdown>
                </div>
        </Header>
        <Content
          style={{
            marginTop: '16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          <ManageSiteTable/>
        </Content>
        <Footer
          style={{
            textAlign: 'right',
          }}
        >
          Powered by SigmahealthPro
        </Footer>
      </Layout>
    </Layout>
  )
}

export default SideNavBar