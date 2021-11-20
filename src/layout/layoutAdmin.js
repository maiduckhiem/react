import { NavLink, Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <div className="flex space-x-5">
        <NavLink to="dashboard" activeClass="active">
          Dashboard
        </NavLink>
        <NavLink to="product" activeClass="active">
          Quản lý sản phẩm
        </NavLink>
        <NavLink to="product/add" activeClass="active">
          Thêm sản phẩm
        </NavLink>
        <NavLink to="/" activeClass="active" className="text-red-500">
          Back to website
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
