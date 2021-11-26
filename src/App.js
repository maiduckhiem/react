import React from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import { Delete, getAllcategory, Add ,Update } from "./api/categoryAPI";
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
import Products from "./pages/product";
import Home from "./component/home";
import Productimage from "./component/productImage";
import Login from "./component/login";
import Categorymanager from "./pages/categoryManager";
import Categoryadd from "./pages/categoryAdd";
import Categoryedit from "./pages/categoryEdit";
import ProductEdit from './pages/productEdit'
import ProductAdd from "./pages/productAdd";
import Introduce from "./component/introduce";
import Introducedetail from "./component/introduceDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    // product
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };
    getProducts();
  //  category
    const getCategory = async () => {
      try {
        const { data } = await getAllcategory();
        setCategory(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getCategory();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
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
      setProducts([...products, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUpdate = async (product) => {
    try {
      const { data } = await update(product);
      const newProducts = products.map((item) =>
        item.id === data.id ? data : item
      );
      setProducts(newProducts);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //category
  const onHandleDelete = async (id) => {
    try {
      const { data } = await Delete(id);
      const newCategory = categories.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setCategory(newCategory);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandleADD = async (category) => {
    try {
      // call api
      const { data } = await Add(category);
      // rerender
      setCategory([...categories, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUPDATE = async (category) => {
    try {
      const { data } = await Update(category);
      const newCategory = categories.map((item) =>
        item.id === data.id ? data : item
      );
      setCategory(newCategory);
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
        <Route index element={<Home products={products}/>} />
        <Route
          path="product"
          element={<Products products={products} />}
        />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="introduce/:id" element={<Introducedetail/>}/>
        <Route path="/introduce" element={<Introduce products={products}/>}/>
        <Route path="/pagesimage" element={<Productimage products={products} />} />
      </Route>

      {/* Layout Admin */}
      <Route path="admin/*" element={<LayoutAdmin />}>
        <Route index
          path="product"
          element={
            <ProductManager
              products={products}
              onRemove={onHandleRemove}
            />
          }
        />
        <Route
          path="product/add"
          element={<ProductAdd  category={categories} onAdd={onHandleAdd} />}
        />
        <Route
          path="product/:id/edit"
          element={<ProductEdit category={categories} onUpdate={onHandeUpdate} />}
        />
        {/* category */}
        <Route path="category" element={<Categorymanager categories={categories} onDelete={onHandleDelete}/>} />
        <Route path="category/add" element={<Categoryadd onADD={onHandleADD}/>}/>
        <Route
          path="category/:id/edit"
          element={<Categoryedit onUPDATE={onHandeUPDATE} />}
        />
      </Route>
    </Routes>
  </div>
</BrowserRouter>
    </div>
  );
}

export default App;
