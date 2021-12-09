import React from "react";
import { getAllintroduce, DElete, aDD, UPdate } from './api/introduceAPI'
import { add, getAll, remove, update } from "./api/productAPI";
import { Delete, getAllcategory, Add, Update } from "./api/categoryAPI";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.css"
import 'antd/dist/antd.css';
import "react-toastify/dist/ReactToastify.css";
import { getALL, DELETE } from "./api/authAPI";
import LayoutWebsite from "./layout/layoutWebsite";
import ProductDetail from "./pages/website/product/productDetail";
import LayoutAdmin from "./layout/layoutAdmin";
import ProductManager from "./pages/admin/product/productManager";
import Products from "./pages/website/product/product";
import Home from "./component/home";
import Productimage from "./pages/website/product/productImage";
import Login from "./component/login";
import Categorymanager from "./pages/admin/category/categoryManager";
import Categoryadd from "./pages/admin/category/categoryAdd";
import Categoryedit from "./pages/admin/category/categoryEdit";
import ProductEdit from './pages/admin/product/productEdit'
import ProductAdd from "./pages/admin/product/productAdd";
import Introduce from "./pages/website/blog/introduce";
import Introducedetail from "./pages/website/blog/introduceDetail";
import Introducemanager from "./pages/admin/blog/introduceManager";
import Introduceadd from "./pages/admin/blog/introduceAdd";
import Introduceedit from "./pages/admin/blog/introduceEdit";
import Signin from "./component/signin";
import Signup from "./component/signup";
import PrivateAdmin from "./api/privateAdmin";
import Usermanager from "./pages/admin/user/userManager";
import Header from "./component/header";

function App() {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [introduces, setIntroduce] = useState([])
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getALL()
        setUsers(data)
      }
      catch (error) {
        toast.error(error.response.data)
      }
    }
    getUser()
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
    //introduce
    const getIntroduce = async () => {
      try {
        const { data } = await getAllintroduce();
        setIntroduce(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };
    getIntroduce();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setProducts(newProducts, data);
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
      setProducts(newProducts, data);
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
      setCategory(newCategory, data);
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
      setCategory(newCategory, data);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  //introduce
  const OnHandleRemove = async (id) => {
    try {
      const { data } = await DElete(id);
      const newIntroduce = introduces.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setIntroduce(newIntroduce, data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const OnHandleAdd = async (introduce) => {
    try {
      // call api
      const { data } = await aDD(introduce);
      // rerender
      setIntroduce([...introduces, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const OnHandeUpdate = async (introduce) => {
    try {
      const { data } = await UPdate(introduce);
      const newIntroduce = introduces.map((item) =>
        item.id === data.id ? data : item
      );
      setIntroduce(newIntroduce, data);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  //user
  const Remove = async (id) => {
    try {
      const { data } = await DELETE(id);
      const newUser = users.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setIntroduce(newUser, data);
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
              <Route index element={<Home products={products} category={categories}/>} />
              <Route path="/category" element={<Header categorys={categories} />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="product"
                element={<Products products={products} />}
              />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="introduce/:id" element={<Introducedetail />} />
              <Route path="/introduce" element={<Introduce introduce={introduces} />} />
              <Route path="/pagesimage" element={<Productimage products={products} />} />
            </Route>

            {/* Layout Admin */}
            <Route path="admin/*" element={<PrivateAdmin><LayoutAdmin user={users} /></PrivateAdmin>}>
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
                element={<ProductAdd category={categories} onAdd={onHandleAdd} />}
              />
              <Route
                path="product/:id/edit"
                element={<ProductEdit category={categories} onUpdate={onHandeUpdate} />}
              />
              {/* category */}
              <Route path="category" element={<Categorymanager categories={categories} onDelete={onHandleDelete} />} />
              <Route path="category/add" element={<Categoryadd onADD={onHandleADD} />} />
              <Route
                path="category/:id/edit"
                element={<Categoryedit onUPDATE={onHandeUPDATE} />}
              />
              {/* introduce */}
              <Route path="introduce/add" element={<Introduceadd onadd={OnHandleAdd} />} />
              <Route path="introduce" element={<Introducemanager introduce={introduces} onRemove={OnHandleRemove} />} />
              <Route path="introduce/:id/edit" element={<Introduceedit OnUpdate={OnHandeUpdate} />} />
              {/* user */}
              <Route path="user" element={<Usermanager user={users} Remove={Remove} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
