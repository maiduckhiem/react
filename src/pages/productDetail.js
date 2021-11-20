import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../api/productAPI";
import { InputNumber, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from "../component/footer";
function onChange(value) {
    console.log('changed', value);
}
export default function ProductDetail() {
  // Lấy ID trên url thông qua hook useParams
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // khai báo hàm getProduct
    const getProduct = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await read(id);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  return product && <div> <div className="container mx-auto">
  <p className="text-xs m-1">trang chủ / <span>Điện máy</span></p>
  <div className="grid grid-cols-12 gap-7">
      <div className="col-span-5 border-2">
          <img src={product.image} />
      </div>
      <div className="col-span-7">
          <h4 className="border-b-2 text-2xl font-bold pb-2">{product.name}</h4>
          <p className="text-red-600 font-bold text-xl">100,000,000 ₫</p>
          <p>màu sắc:  <span className="font-bold">vàng</span></p>
          <ul>
              <li className="">Dung tích: 475 lít</li>
              <li className="">Dung tích: 475 lít</li>
              <li className="">Dung tích: 475 lít</li>
              <li className="">Dung tích: 475 lít</li>
          </ul>
          <div className="flex mt-10">
              <InputNumber className size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
              <div className="flex  ml-10 bg-gray-400 px-3 pt-2 hover:bg-red-500 cursor-pointer">
                  <ShoppingCartOutlined className="text-xl" />
                  <h3 className="ml-2">THÊM VÀO RỎ HÀNG</h3>
              </div>
          </div>

      </div>
  </div>
</div><Footer/>
</div>;
}
