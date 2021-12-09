import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import {UPdate,read} from '../../../api/introduceAPI'
import { storage } from '../../../firebase/index';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

const Introduceedit = (props) => {
    const {
        register, handleSubmit, reset,
        formState: { errors }
    } = useForm();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getIntroduce = async () => {
            try {
                const { data } = await read(id);
                reset(data);
            }
            catch (error) {

            }
        }
        getIntroduce()
    }, [id, reset]);
    const onSubmit = (data) => {
        const file = document.querySelector('#image').files[0]
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
               props.OnUpdate(newIntroduce)
            })
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-xl">Mời bạn sửa thông tin:</h3>
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <div className="mt-5">
                            <p>* tiêu đề</p>
                            <input type="text" className="border-2 border-gray-400 w-96 rounded  p-2" {...register('name')} />
                            {errors.name && <span className="text-red-500">field is required</span>}
                        </div>

                        <div className="mt-5">
                            <p>* ngày</p>
                            <input type="date" className="border-2 border-gray-400 w-96 rounded  p-2" {...register('date')} />
                        </div>
                        <div className="mt-5">
                            <p>* Content</p>
                            <input type="text" className="border-2 border-gray-400 w-96 rounded  p-2" {...register('content')} />
                        </div>
                    </div>
                    <div className="mt-5 col-span-8">
                        <div >
                            <p>* nội dung</p>
                            <textarea className='border-2 border-gray-400 w-full  rounded  pb-20 pl-2 pt-2'  {...register('description')} />
                        </div>
                        <div className="mt-5">
                            <p>* image</p>
                            <input type="file" id="image" />
                        </div>
                    </div>
                </div>
                <button className="mt-5 bg-green-600 p-1 rounded text-white px-2">cập nhật</button>
                <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
            </form>
        </div>
    );
}

export default Introduceedit;
