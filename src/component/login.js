import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container mx-auto">
                    <div className="mx-auto mt-5">
                        <img className="mx-auto" src="" alt="" width="40%" />
                    </div>
                    <div className="mx-40 grid grid-cols-1 shadow-2xl p-10 mt-5 rounded">
                        <h4 className="text-center font-bold opacity-70 mt-2">Đăng nhập vào tài khoản</h4>
                        <input type="text" placeholder="Nhập email" className="input input-primary input-bordered mt-5" />
                        <input type="text" placeholder="Nhập mật khẩu" className="input input-primary input-bordered mt-5" />
                        <button className="btn btn-accent mt-5">ĐĂNG NHẬP</button>
                        <div className="grid grid-cols-2 mt-3">
                            <button className="btn btn-link text-info text-xs">Không thể đăng nhập? </button>
                            <button className="btn btn-link text-info text-xs">Đăng ký tài khoản</button>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-link text-info text-xs">Chính sách Riêng tư</button>
                        <button className="btn btn-link text-info text-xs">Điều khoản dịch vụ</button>
                    </div>
                    <div className=" mt-10">
                        <img className="mx-auto" src="" alt="" width="20%" />
                    </div>

                </div>
            </div>
        )
    }
}
export default Login