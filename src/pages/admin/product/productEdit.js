import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Select } from 'antd';
import { read } from "../../../api/productAPI";
import { storage } from '../../../firebase/index';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";
const { Option } = Select;
export default function ProductEdit(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  // Lấy ID trên url thông qua hook useParams
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // khai báo hàm getProduct
    const getProduct = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await read(id);
        reset(data);
      } catch (error) { }
    };
    getProduct();
  }, [id, reset]);

  const onSubmit = (data) => {
    const file = document.querySelector('#image').files[0]
    const storageRef = ref(storage, 'products/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uploadTask)
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
        const newProducts = {
          ...data,
          image: downloadURL
        }
        console.log(newProducts);
        props.onUpdate(newProducts);
      })
    })
  };

  return (
    <form className="ml-10" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-bold text-xl">Mời bạn sửa thông tin:</h3>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="mt-5">
            <p>* tên sản phẩm</p>
            <input className="border-2 border-gray-400 w-96 rounded p-2"
              type="text"
              {...register("name", { required: true })}
              placeholder="Tên sản phẩm"
            />
            {errors.name && <span>Field is required</span>}
          </div>

          <div className="mt-5">
            <p>* giá sản phẩm</p>
            <input className="border-2 border-gray-400 mb-5 w-96 rounded p-2"
              type="text"
              {...register("price")}
              placeholder="Giá sản phẩm"
            />
          </div>
          <select style={{ width: 200 }}
            className='border-2 border-gray-400 rounded p-2'
            {...register('categorId')}
          >
            {props.category && props.category.map((item, index) => {
              return (
                <option className="p-2 " value={item.id} key={index}>{item.name}</option>
              )
            })}
          </select>
        </div>
        <div className="col-span-8 mt-5">
          <div>
            <p>* content</p>
            <textarea type="text" className="border-2 border-gray-400 mb-5 w-full rounded pb-20 pl-2 pt-2" {...register('content')} />
          </div>
          <div>
            <p>* color</p>
            <input className="border-2 border-gray-400 w-full rounded p-2" type="text" {...register('color')} />
          </div>
          <div>
            <input type="file" id="image" />
          </div>
        </div>
      </div>
      <div>
        <button className="mt-5 bg-green-600 p-1 rounded text-white px-2">Cập nhật</button>
        <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </form>
  );
}
