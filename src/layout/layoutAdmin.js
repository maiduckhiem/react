import React, { Component } from "react";
import { Menu, Button, Layout, Avatar, Dropdown } from 'antd';
import { ExpandAltOutlined, SoundOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { NavLink, Outlet, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        file
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        setting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000">
        log out
      </a>
    </Menu.Item>
  </Menu>
);

class LayoutAdmin extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div >
              <Avatar src="https://joeschmoe.io/api/v1/random" style={{
                width: 50, margin: 20
              }} url="http://localhost:3000/" />
              <Menu className="h-100"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/admin/product" />trang chủ
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="category" />danh mục sản phẩm
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                  <Link to="product" /> sản phẩm
                </Menu.Item>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="quản lý sản phẩm">
                  <Link to="/admin/product/" />
                  <Menu.Item key="9">nội dung sản phẩm</Menu.Item>
                </SubMenu>
                <Menu.Item key="4" icon={<ContainerOutlined />}>
                  tài khoản
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background bg-black text-xl mr-0" >
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggleCollapsed,
              })}
              <ExpandAltOutlined className="nav mr-10" />
              <SoundOutlined className="mr-10" />
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Dropdown>
            </Header>
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

}

export default LayoutAdmin