import { Link } from "react-router-dom";
import { MenuUnfoldOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Footer from "../component/footer";

const { SubMenu } = Menu;
const Product = ({ products }) => {
  return (
    <div>
      <div className="container mx-auto">
        <p className="m-0">trang chủ /<span className="ml-2 m-0">sản phẩm</span></p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 border">
            <div className="flex bg-gray-400 p-1">
              <MenuUnfoldOutlined className="pt-2 pr-3 pl-2" /><h3 className="pt-1">
                DANH MỤC SẢN PHẨM
              </h3>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          <div className="col-span-9">
            <h3 className="p-3 bg-gray-300">SẢN PHẨM</h3>
            <div className="grid grid-cols-12 mt-10 gap-5">
              {products.map((item, index) => {
                return (
                  <div className="col-span-4" key={index}>
                    <div><img src={item.image}/></div>
                    <div className="text-center mt-2"><Link to={`${item.id}`}>{item.name}</Link></div>
                    <div className="text-center font-bold text-red-500">{item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Product;
