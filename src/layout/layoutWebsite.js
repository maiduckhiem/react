import React from 'react';
import { NavLink, Outlet, Link } from "react-router-dom";
import { Menu, Dropdown, Button, Space } from 'antd';
import { CalendarOutlined, ShoppingCartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router';
import { isAuthenticate } from '../api/authenticate';



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

const LayoutWebsite = ({ user }) => {
    const nav = (
        <Menu>
            <Menu.Item>
                <Link target="_blank" rel="" to="/login"> đăng nhập</Link>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    đăng ký
                </a>
            </Menu.Item>
        </Menu>
    );
    const auth = isAuthenticate();
    console.log(auth)
    const perpage = 1;
    const start = 0;
    const end = perpage;
    const navigate = useNavigate()

    const signout = () => {
        localStorage.clear(auth)
        navigate("/signin")
    }

    return (
        <div>
            <div className="bg-gray-800">
                <div className="container mx-auto py-4 z-50">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/setting/3/i-n-may-logo.png" />
                        </div>
                        <div className="col-span-6 mt-1">
                            <Space direction="vertical">
                                <Space wrap>
                                    <NavLink className="mx-2 text-white uppercase hover:text-green-500" to="/" activeclass="active">
                                        TRANG CHỦ
                                    </NavLink>
                                    <Dropdown overlay={menu} placement="bottomLeft">
                                        <NavLink className="mx-2 text-white uppercase hover:text-green-500 " to="/introduce" activeclass="active">
                                            GIỚI THIỆU
                                        </NavLink>
                                    </Dropdown>
                                    <NavLink className="mx-2 text-white uppercase hover:text-green-500" to="/" activeclass="active">
                                        TIN TỨC
                                    </NavLink>
                                    <NavLink className="mx-2 text-white uppercase hover:text-green-500" to="/pagesimage" activeclass="active">
                                        ẢNH
                                    </NavLink>
                                    <NavLink className="mx-2 text-white uppercase hover:text-green-500" to="/" activeclass="active">
                                        VIDEO
                                    </NavLink>
                                    <NavLink className="mx-2 text-white uppercase hover:text-green-500" to="product" activeclass="active">
                                        SẢN PHẨM
                                    </NavLink>
                                </Space>
                            </Space>,

                        </div>
                        <div className="col-span-4 ml-auto">
                            <UserOutlined className="text-xl cursor-pointer mx-3" to="/signin" style={{ color: "white" }} />
                            <LogoutOutlined className="text-xl cursor-pointer mx-3" onClick={signout} style={{ color: "white" }}/>
                            <ShoppingCartOutlined className="text-xl cursor-pointer mx-3" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default LayoutWebsite;