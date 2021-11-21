import React from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.css"
import 'antd/dist/antd.css';
import "react-toastify/dist/ReactToastify.css";
import LayoutWebsite from "./layout/layoutWebsite";
import ProductDetail from "./pages/productDetail";
import LayoutAdmin from "./layout/layoutAdmin";
import ProductManager from "./pages/productManager";
import ProductAddPage from "./pages/productAdd";
import ProductEditPage from "./pages/productEdit";
import Products from "./pages/product";
import Home from "./component/home";
import Productimage from "./component/productImage";
import Login from "./component/login";
function App() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getProducts();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = product.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setProducts(newProducts);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandleAdd = async (product) => {
    try {
      // call api
      const { data } = await add(product);
      // rerender
      setProducts([...product, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUpdate = async (product) => {
    try {
      const { data } = await update(product);
      const newProducts = product.map((item) =>
        item.id === data.id ? data : item
      );
      setProducts(newProducts);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="App">
     <ToastContainer />

<BrowserRouter>
  <div className="">
    <Routes>
      {/* Layout Website */}
      <Route path="/" element={<LayoutWebsite />}>
        <Route index element={<Home/>} />
        <Route
          path="product"
          element={<Products products={product} />}
        />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login/>} />
        <Route path="/pagesimage" element={<Productimage products={product} />} />
      </Route>

      {/* Layout Admin */}
      <Route path="admin/*" element={<LayoutAdmin />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route
          path="product"
          element={
            <ProductManager
              products={product}
              onRemove={onHandleRemove}
            />
          }
        />
        <Route
          path="product/add"
          element={<ProductAddPage onAdd={onHandleAdd} />}
        />
        <Route
          path="product/:id/edit"
          element={<ProductEditPage onUpdate={onHandeUpdate} />}
        />
      </Route>
    </Routes>
  </div>
</BrowserRouter>
    </div>
  );
}

export default App;
