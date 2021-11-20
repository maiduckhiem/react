import { NavLink, Outlet } from "react-router-dom";
import { Menu, Dropdown, Button, Space } from 'antd';
import { CalendarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import React, { Component } from 'react';


const nav = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/login">
                đăng nhập
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                đăng ký
            </a>
        </Menu.Item>
    </Menu>
);
const menu = (
    <Menu>
        <Menu.Item >
            <a target="_blank" rel="noopener noreferrer" href="">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);
class LayoutWebsite extends Component {
    render() {
        return (
            <div>
                <div className="bg-gray-800">
                    <div className="container mx-auto py-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-3">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/setting/3/i-n-may-logo.png" />
                            </div>
                            <div className="col-span-6 mt-1">
                                <Space direction="vertical">
                                    <Space wrap>
                                        <NavLink className="mx-2 uppercase hover:text-white" to="/" activeclass="active">
                                            TRANG CHỦ
                                        </NavLink>
                                        <Dropdown overlay={menu} placement="bottomLeft">
                                            <NavLink className="mx-2 uppercase hover:text-white " to="" activeclass="active">
                                                GIỚI THIỆU
                                            </NavLink>
                                        </Dropdown>
                                        <NavLink className="mx-2 uppercase hover:text-white" to="/product" activeclass="active">
                                            TIN TỨC
                                        </NavLink>
                                        <NavLink className="mx-2 uppercase hover:text-white" to="/pagesimage" activeclass="active">
                                            ẢNH
                                        </NavLink>
                                        <NavLink className="mx-2 uppercase hover:text-white" to="help" activeclass="active">
                                            VIDEO
                                        </NavLink>
                                        <NavLink className="mx-2 uppercase hover:text-white" to="product" activeclass="active">
                                            SẢN PHẨM
                                        </NavLink>
                                    </Space>
                                </Space>,

                            </div>
                            <div className="col-span-3 ml-auto">
                                <Dropdown overlay={nav} placement="bottomLeft" arrow>
                                    <UserOutlined className="text-xl cursor-pointer mx-3" style={{ color: "white" }} />
                                </Dropdown>
                                <ShoppingCartOutlined className="text-xl cursor-pointer mx-3" style={{ color: "white" }} />
                                < CalendarOutlined className="text-xl cursor-pointer mx-3" style={{ color: "white" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        );
    }
}

export default LayoutWebsite;
