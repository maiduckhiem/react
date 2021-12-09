import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from '../../../firebase/index';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
export default function ProductAdd(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const file = (data.image[0])
    const storageRef = ref(storage, 'products/' + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uploadTask)
		uploadBytes(storageRef, file). then(() => {
      getDownloadURL(uploadTask.snapshot.ref). then((downloadURL) =>{
          console.log(downloadURL);
         const newProducts = {
            ...data,
            image: downloadURL
         }
         console.log(newProducts);
         props.onAdd(newProducts)
      })
  })
  };
  //
  const navigate = useNavigate();
  return (
    <form className="mx-10 grid grid-cols-12 gap-24" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-span-4">
        <h3 className="font-bold text-xl">Mời bạn thêm thông tin:</h3>
        <div className="mt-5">
          <p>* tên sản phẩm :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="text"
            {...register("name", { required: true, maxLength: 255 })}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <span>Field is required</span>}
        </div>
        <div className="mt-5">
          <p>* số lượng :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="number"
            {...register("quantity", { required: true, maxLength: 35 })}
            placeholder="số lượng"
          />
        </div>
        <div className="mt-5">
          <p>* giá sản phẩm :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="number"
            {...register("price", { required: true, maxLength: 35 })}
            placeholder="Giá sản phẩm"
          />
        </div>
        <div className="mt-5">
          <p>* trạng thái</p>
          <select className="border-2 border-gray-400 w-96 rounded p-2" {...register('status',{required:true })}>
            <option className="text-info">mới</option>
            <option className="text-red-500">hết hàng</option>
            <option className="text-green-500">còn hàng</option>
          </select>
        </div>
        <button className="mt-5 bg-green-600 p-1 rounded text-white px-3"  >Thêm</button>
        <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
      </div>
      <div className="col-span-8">
        <div className="mt-12">
          <p>* mô tả :</p>
          <textarea className="border-2 border-gray-400 w-96 rounded p-2 w-full" rows="5" type="text"
            {...register("description", { required: true })}
            placeholder="mô tả"></textarea>
          {errors.name && <span>Field is required</span>}
        </div>
        <select
          style={{ width: 200 }}
          {...register('categoryId')}
          className='border-2 p-2 rounded'
        >
          {props.category && props.category.map((category, index) => {
            return (
              <option value={category.id} key={index}>{category.name}</option>
            )
          })}

        </select>
        <input {...register('image',[])} type="file" name="image" />
      </div>
      <div>
      </div>
    </form>
  );
}