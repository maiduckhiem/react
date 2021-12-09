import React, { useState } from "react";
import { Menu, Layout, Avatar } from 'antd';
import { ExpandAltOutlined, SoundOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { isAuthenticate } from '../api/authenticate';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


const LayoutAdmin = ({ user }) => {
  const auth = isAuthenticate();
  console.log(auth)
  const perpage = 1;
  const start = 0;
  const end = perpage;
  const navigate = useNavigate()
  const onesubmit = () => {
    const signout = () => {
      localStorage.clear()
      navigate("/signin")
    }
    if (auth) {
      return (<div><button onClick={signout}>đăng xuất</button></div>)
    } else {

    }

  }
  return (
    <div>
      <Layout>
        <Sider >
          <div >
            <div className="text-center ">
              <Avatar className="border" src="https://joeschmoe.io/api/v1/random" style={{
                width: 50, height: 50, margin: 20
              }} url="http://localhost:3000/" />
            </div>
            {user.map((item, index) => {
              if (index >= start && index < end) {
                return <div className="text-center mb-2 text-white" key={index}>
                  <div>{item.name}</div>
                </div>
              }
            })}
            <Menu className="h-100"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/" />trang chủ
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="category" />danh mục sản phẩm
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                <Link to="product" /> sản phẩm
              </Menu.Item>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="quản lý sản phẩm">
                <Link to="/" />
                <Menu.Item key="9"> <Link to="introduce" />quản lý introduc</Menu.Item>
              </SubMenu>
              <Menu.Item key="4" icon={<ContainerOutlined />}>
                <Link to="user"/>
                tài khoản
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className="site-layout">

          <div className="bg-gray-700 py-3 grid grid-cols-1 ">
            <div className="flex ml-auto mx-20">
              <ExpandAltOutlined className="mx-10 text-xl mt-4" />
              <SoundOutlined className="mx-10 text-xl mt-4" />
              <div className="ml-5">
              <Avatar className="border " src="https://joeschmoe.io/api/v1/random" style={{
                width: 30, height: 30 ,left:13
              }} url="http://localhost:3000/" />
               <div className="text-white"> {onesubmit()}</div>
              </div>
            </div>
          </div>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 300,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutAdmin