import React from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {signin} from '../api/authAPI';
import { authenticate} from '../api/authenticate';
const Signin = () => {
    const { register, handleSubmit ,formState: { errors }} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signin(data).then((response) => {
            toast.success("đăng nhập thành công")
            authenticate(response.data.user)
            console.log(response.data.user)
            if(response.data.user.id === 1){
                navigate("/admin")
            }else{
                navigate("/")
            }
        })
            .catch((error) => toast.error('đăng nhập thất bại', error.response.data));
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
                        <h4 className="text-center font-bold opacity-70 mt-2">Đăng nhập vào tài khoản</h4>
                        <input type="text" placeholder="Nhập email"  {...register('email')}  className="input input-primary input-bordered mt-5" />
                        {errors.name && <span className="text-red-500">mời bạn nhập</span>}
                        <input type="password" placeholder="Nhập mật khẩu" {...register('password')} className="input input-primary input-bordered mt-5" />
                        <button className="btn btn-accent mt-5">ĐĂNG NHẬP</button>
                        <div className="grid grid-cols-2 mt-3">
                            <p className="btn btn-link text-info text-xs">Không thể đăng nhập? </p>
                            <p className="btn btn-link text-info text-xs"><Link to="/signup">Đăng ký tài khoản</Link></p>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p className="btn btn-link text-info text-xs">Chính sách Riêng tư</p>
                        <p className="btn btn-link text-info text-xs">Điều khoản dịch vụ</p>
                    </div>
                    <div className=" mt-10">
                        <img className="mx-auto" src="" alt="" width="20%" />
                    </div>

                </div>
            </div>
            </form>
        </div>
    );
}

export default Signin;
