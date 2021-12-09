import React from 'react';
import { signup } from '../api/authAPI';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { authenticate } from '../api/authenticate';
import Footer from './footer';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signup(data).then((response) => {
            toast.success("đăng ký thành công")
            authenticate(response.data.user)
            console.log(response)
            navigate('/signin')
        }
        )
            .catch((error) => toast.error('đăng ký thất bại', error.response.data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Login">
                    <div className="container mx-auto">
                        <div className="mx-auto mt-5">
                            <img className="mx-auto" src="" alt="" width="40%" />
                        </div>
                        <div className="mx-40 grid grid-cols-1 shadow-2xl p-10 mt-5 rounded">
                            <h4 className="text-center font-bold opacity-70 mt-2">Mời bạn đăng ký tài khoản</h4>
                            <input type="text" placeholder="Nhập Họ" {...register('middleName', { required: true, minLength: 3 })} className="input input-primary input-bordered mt-5" />
                            {errors.middleName && <span className="text-red-500 text-xs mt-1">* không được để trống</span>}
                            <input type="text" placeholder="Nhập Tên" {...register('name', { required: true, minLength: 3 })} className="input 
                            input-primary input-bordered mt-5" />
                            {errors.name && <span className="text-red-500 text-xs mt-1">* không được để trống</span>}
                            <input type="email" placeholder="Nhập email"  {...register('email', { required: true })} className="input input-primary input-bordered mt-5" />
                            <input type="password" placeholder="Nhập mật khẩu" {...register('password', { required: true })} className="input input-primary input-bordered mt-5" />
                            <button className="btn btn-accent mt-5">ĐĂNG kÝ</button>
                            <div className="grid grid-cols-2 mt-3">
                                <p className="btn btn-link text-info text-xs">Chính sách Riêng tư</p>
                                <p className="btn btn-link text-info text-xs">Điều khoản dịch vụ</p>
                            </div>
                        </div>
                        <div className=" mt-10">
                            <img className="mx-auto" src="" alt="" width="20%" />
                        </div>

                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default Signup;
