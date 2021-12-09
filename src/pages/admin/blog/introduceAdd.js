import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { storage } from '../../../firebase/index';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
export default function Introduceadd(props) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSUbmit = (data) => {
        const file = (data.image[0])
        const storageRef = ref(storage, 'introduce/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        console.log(uploadTask)
        uploadBytes(storageRef, file).then(() => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                const newIntroduce = {
                    ...data,
                    image: downloadURL
                }
                console.log(newIntroduce);
                props.onadd(newIntroduce)
            })
        })
    };
    //
    const navigate = useNavigate();

    return (
        <form className="mx-10 grid grid-cols-12 gap-24" onSubmit={handleSubmit(onSUbmit)}>
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
                    <p>* thời gian :</p>
                    <input className="border-2 border-gray-400 w-96 rounded p-2"
                        type="date"
                        {...register("date", { required: true })}
                        placeholder="Tên sản phẩm"
                    />
                    {errors.name && <span>Field is required</span>}
                </div>
                <div className="mt-5">
                    <p>* tên sản phẩm :</p>
                    <input className="border-2 border-gray-400 w-96 rounded p-2"
                        type="text"
                        {...register("content", { required: true, maxLength: 255 })}
                        placeholder="Tên sản phẩm"
                    />
                    {errors.name && <span>Field is required</span>}
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
                <div className="mt-5">
                    <p>* image</p>
                    <div>
                        <input className="border border-gray-400 w-96 rounded p-2" type="file" {...register('image')} />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </form>
    );
}
