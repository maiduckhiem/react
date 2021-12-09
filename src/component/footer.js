

const Footer = () => {
    return (
        <div className="mt-5">
            <div className="footer bg-black">
                <div className="container mx-auto p-5">
                    <div className="grid grid-cols-12 gap-4 mb-10">
                        <div className="col-span-3 text-white mt-10">
                            <h4 className="font-bold text-lg text-white">Tổng đài hỗ trợ</h4>
                            <h4 className="font-bold text-1sm mt-5 text-white">Hotline: <a
                                className="hover:text-white text-green-500 hover:underline" href="#">0123 456 789</a></h4>
                            <h4 className="font-bold text-1sm text-white">Địa chỉ: gốc cây số 10 trần duy hưng</h4>
                            <h4 className="font-bold text-1sm text-white">Email: <a className="hover:text-green-500 hover:underline"
                                href="#">evoteamthemes@gmail.com</a></h4>
                        </div>
                        <div className="col-span-3 text-white mt-10">
                            <h4 className="font-bold text-lg text-white">Giới thiệu</h4>
                            <ul className="mt-5">
                                <li className="text-1sm hover:text-green-500 hover:underline"><a href="">Hệ thống nhà hàng</a>
                                </li>
                                <li className="text-1sm hover:text-green-500 hover:underline"><a href="">Câu chuyện thương
                                    hiệu</a></li>
                                <li className="text-1sm hover:text-green-500 hover:underline"><a href="">Ưu đãi thành viên</a>
                                </li>
                                <li className="text-1sm hover:text-green-500 hover:underline"><a href="">Tin tức và sự kiện</a>
                                </li>
                                <li className="text-1sm hover:text-green-500 hover:underline"><a href="">Tuyển dụng</a></li>
                            </ul>
                        </div>
                        <div className="col-span-3 text-white mt-10">
                            <h4 className="font-bold text-lg text-white">Liên hệ</h4>
                            <ul className="mt-5 text-1sm">
                                <li className="hover:text-green-500 hover:underline"><a href="">Liên hệ</a></li>
                                <li className="hover:text-green-500 hover:underline"><a href="">Hướng dẫn mua hàng</a></li>
                                <li className="hover:text-green-500 hover:underline"><a href="">Chính sách mua hàng</a></li>
                                <li className="hover:text-green-500 hover:underline"><a href="">Chính sách bảo mật</a></li>
                                <li className="hover:text-green-500 hover:underline"><a href="">Điều khoản và điều kiện</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 text-white mt-10">
                            <h4 className="font-bold text-lg text-white">Đăng ký nhận tin</h4>
                            <h5 className="mt-5 text-1sm text-white">Nhận thông tin sản phẩm mới nhất , tin khuyến mãi và nhiều hơn
                                nữa.</h5>
                            <div className="mt-3">
                                <input className="w-full outline-none border p-2 rounded-lg bg-black" type="text" name="" id=""
                                    placeholder="  Mời bạn nhập gmail" />
                                <a href="#">
                                    <h4
                                        className="text-center bg-green-600 py-2 mt-2 rounded-lg font-bold uppercase hover:bg-green-700">
                                        đăng ký</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="bg-green-500">
                <div class="container mx-auto grid grid-cols-12 py-5">
                    <div class="col-span-6 mx-auto">
                        <h4 class="text-white">© Bản quyền thuộc về Đức Khiêm | Cung cấp bởi Đức Khiêm</h4>
                    </div>
                    <div class="col-span-6 mx-auto flex">
                        <div class="mx-5 hover:bg-white hover:text-green-500  rounded-full">
                            <a href=""><i class="fab fa-facebook-f border rounded-full p-2 w-9 text-center text-black"></i></a>
                        </div>
                        <div class="mx-5 hover:bg-white hover:text-green-500  rounded-full"><a href=""><i class="fab fa-instagram border rounded-full p-2 text-black"></i></a></div>
                        <div class="mx-5 hover:bg-white hover:text-green-500  rounded-full"><a href=""><i class="fab fa-youtube border rounded-full p-2 text-black"></i></a></div>
                        <div class="mx-5 hover:bg-white hover:text-green-500  rounded-full"><a href=""><i class="fab fa-twitter border rounded-full p-2 text-black "></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer