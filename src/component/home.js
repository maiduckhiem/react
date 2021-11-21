import React, { Component } from "react";
import { Carousel } from 'antd';
import Footer from "./footer";
const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Home = ({ products }) => {
    return (
        <div className="Home">
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img src="https://electronic04.web4s.vn/uploads/plugin/gallery/125/bannerslide1-banner4-bannerslide1-banner-slide-4.jpg" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src="https://electronic04.web4s.vn/uploads/plugin/gallery/124/bannerslide1-banner-bannerslide1-banner-slide-3-0.jpg" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src="https://electronic04.web4s.vn/uploads/plugin/gallery/117/bannerslide1-banner-slide-1.jpg" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src="https://electronic04.web4s.vn/uploads/plugin/gallery/73/smart-tivi-lg-banner-slide-2.jpg" /></h3>
                </div>
            </Carousel>,

            <div className="container mx-auto">
                <h3 className="uppercase text-xl text-green-600">flash sale chớp nhoáng</h3>
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <div className="mt-10 border-2">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/69/t-l-nh-2-canh-sharp-sj-16vf3-cms-165l-1487829161337-2422008-0.jpg" />
                        </div>
                        <h4 className="mx-2 text-center mt-5">
                            <a className="text-black text-xs" href="">Tủ lạnh 2 cánh Sharp SJ-16VF3 (CMS), 165L (Xám)</a></h4>
                        <p className="text-center font-bold">4.000.000đ</p>
                    </div>
                    <div className="col-span-3">
                        <div className="mt-10 border-2">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/69/t-l-nh-2-canh-sharp-sj-16vf3-cms-165l-1487829161337-2422008-0.jpg" />
                        </div>
                        <h4 className="mx-2 text-center mt-5">
                            <a className="text-black text-xs" href="">Tủ lạnh 2 cánh Sharp SJ-16VF3 (CMS), 165L (Xám)</a></h4>
                        <p className="text-center font-bold">4.000.000đ</p>
                    </div>
                    <div className="col-span-3">
                        <div className="mt-10 border-2">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/69/t-l-nh-2-canh-sharp-sj-16vf3-cms-165l-1487829161337-2422008-0.jpg" />
                        </div>
                        <h4 className="mx-2 text-center mt-5">
                            <a className="text-black text-xs" href="">Tủ lạnh 2 cánh Sharp SJ-16VF3 (CMS), 165L (Xám)</a></h4>
                        <p className="text-center font-bold">4.000.000đ</p>
                    </div>
                    <div className="col-span-3">
                        <div className="mt-10 border-2">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/69/t-l-nh-2-canh-sharp-sj-16vf3-cms-165l-1487829161337-2422008-0.jpg" />
                        </div>
                        <h4 className="mx-2 text-center mt-5">
                            <a className="text-black text-xs" href="">Tủ lạnh 2 cánh Sharp SJ-16VF3 (CMS), 165L (Xám)</a></h4>
                        <p className="text-center font-bold">4.000.000đ</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-10 gap-5    ">
                    <div className="col-span-1">
                        <img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-08-02/custom-1504-banner-samsungs6.jpg" />
                    </div>
                    <div className="col-span-1">
                        <img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-08-02/custom-ss.png" />
                    </div>
                    <div className="col-span-1">
                        <img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-08-02/custom-smartwatch.jpg" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl uppercase text-green-600 mt-10">
                        điên thoại
                    </h3>
                    <div className="grid grid-cols-12 gap-5 mt-4">
                        <div className="col-span-3">
                            <div className="border-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/97/ng-h-thong-minh-apple-wach-stainless-steel-38mm-series-2-silver-link-bracelet-1495103959921-8808088.jpeg" />
                            </div>
                            <h4 className="text-center mt-3 mx-2 text-xs">Đồng hồ thông minh Apple Wach Stainless Steel 38mm Series 2 - Silver </h4>
                            <p className="text-center font-bold">25,000,000d</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/97/ng-h-thong-minh-apple-wach-stainless-steel-38mm-series-2-silver-link-bracelet-1495103959921-8808088.jpeg" />
                            </div>
                            <h4 className="text-center mt-3 mx-2 text-xs">Đồng hồ thông minh Apple Wach Stainless Steel 38mm Series 2 - Silver </h4>
                            <p className="text-center font-bold">25,000,000d</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/97/ng-h-thong-minh-apple-wach-stainless-steel-38mm-series-2-silver-link-bracelet-1495103959921-8808088.jpeg" />
                            </div>
                            <h4 className="text-center mt-3 mx-2 text-xs">Đồng hồ thông minh Apple Wach Stainless Steel 38mm Series 2 - Silver </h4>
                            <p className="text-center font-bold">25,000,000d</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/97/ng-h-thong-minh-apple-wach-stainless-steel-38mm-series-2-silver-link-bracelet-1495103959921-8808088.jpeg" />
                            </div>
                            <h4 className="text-center mt-3 mx-2 text-xs">Đồng hồ thông minh Apple Wach Stainless Steel 38mm Series 2 - Silver </h4>
                            <p className="text-center font-bold">25,000,000d</p>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-12 gap-5">
                        <div className="col-span-8"><img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-07-07/custom-banner-11.png" /></div>
                        <div className="col-span-4"><img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-07-07/custom-banner-12.png" /></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl text-green-600 font-bold uppercase mt-10">điện tử - âm thanh</h3>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <div className="border-2 mt-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/87/loa-bluetooth-sony-srs-x11-1468394443648-4876139-0.jpg" />
                            </div>
                            <h3 className="mx-2 text-center text-xs mt-3">
                                Loa Bluetooth Sony SRS-X11 (Xanh biển)
                            </h3>
                            <p className="text-center font-bold ">2,900,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/87/loa-bluetooth-sony-srs-x11-1468394443648-4876139-0.jpg" />
                            </div>
                            <h3 className="mx-2 text-center text-xs mt-3">
                                Loa Bluetooth Sony SRS-X11 (Xanh biển)
                            </h3>
                            <p className="text-center font-bold ">2,900,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/87/loa-bluetooth-sony-srs-x11-1468394443648-4876139-0.jpg" />
                            </div>
                            <h3 className="mx-2 text-center text-xs mt-3">
                                Loa Bluetooth Sony SRS-X11 (Xanh biển)
                            </h3>
                            <p className="text-center font-bold ">2,900,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-2">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/87/loa-bluetooth-sony-srs-x11-1468394443648-4876139-0.jpg" />
                            </div>
                            <h3 className="mx-2 text-center text-xs mt-3">
                                Loa Bluetooth Sony SRS-X11 (Xanh biển)
                            </h3>
                            <p className="text-center font-bold ">2,900,000 ₫</p>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 mt-5 gap-5">
                    <div className="col-span-1">
                        <img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-05-22/custom-b4.jpg" />
                    </div>
                    <div className="col-span-1">
                        <img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-05-22/custom-b5.jpg" />
                    </div>
                </div>
                <div>
                    <h3 className="uppercase  mt-10 text-xl text-green-500">
                        đồ da dụng
                    </h3>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <div className="border-2 mt-3">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/81/b-p-gas-ban-sunhouse-shb3365-147306340998-6819208-0.jpg" />
                            </div>
                            <h4 className="text-center mt-2">Bếp gas bàn Sunhouse SHB3365 (Màu Đen)</h4>
                            <p className="text-center font-bold">4,100,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-3">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/81/b-p-gas-ban-sunhouse-shb3365-147306340998-6819208-0.jpg" />
                            </div>
                            <h4 className="text-center mt-2">Bếp gas bàn Sunhouse SHB3365 (Màu Đen)</h4>
                            <p className="text-center font-bold">4,100,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-3">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/81/b-p-gas-ban-sunhouse-shb3365-147306340998-6819208-0.jpg" />
                            </div>
                            <h4 className="text-center mt-2">Bếp gas bàn Sunhouse SHB3365 (Màu Đen)</h4>
                            <p className="text-center font-bold">4,100,000 ₫</p>
                        </div>
                        <div className="col-span-3">
                            <div className="border-2 mt-3">
                                <img src="https://electronic04.web4s.vn/uploads/plugin/products/81/b-p-gas-ban-sunhouse-shb3365-147306340998-6819208-0.jpg" />
                            </div>
                            <h4 className="text-center mt-2">Bếp gas bàn Sunhouse SHB3365 (Màu Đen)</h4>
                            <p className="text-center font-bold">4,100,000 ₫</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-3">
                    <img className="w-full" src="https://electronic04.web4s.vn/uploads/plugin/products/102/thumb/thumb_350_ipad-pro-9-7-inch-ipad-pro.jpg" />
                </div>
                <div className="col-span-3">
                    <img className="w-full" src="https://electronic04.web4s.vn/uploads/plugin/products/101/thumb/thumb_350_may-gi-t-addwash-trade-sp3.jpg" />
                </div>
                <div className="col-span-3">
                    <img className="w-full" src="https://electronic04.web4s.vn/uploads/plugin/products/100/thumb/thumb_350_iphone-7-plus-sp1.jpg" />
                </div>
                <div className="col-span-3">
                    <img className="w-full" src="https://electronic04.web4s.vn/uploads/plugin/products/99/thumb/thumb_350_premium-uhd-tv-tv.jpg" />
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <h3 className="uppercase text-green-500 text-xl">kỹ thuật số</h3>
                <div className="mt-10 grid grid-cols-12 gap-5">
                    <div className="col-span-3">
                        <div className="border-2 mt-3">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/91/ma-y-nghe-nha-c-sony-walkman-nw-ws413-4gb-147486771223-7528226-0.jpg" />
                        </div>
                        <h4 className="text-center mt-3">Máy nghe nhạc Sony Walkman (Xanh lá cây)</h4>
                        <p className="font-bold text-center">2,700,000 ₫</p>
                    </div>
                    <div className="col-span-3">
                        <div className="border-2 mt-3">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/91/ma-y-nghe-nha-c-sony-walkman-nw-ws413-4gb-147486771223-7528226-0.jpg" />
                        </div>
                        <h4 className="text-center mt-3">Máy nghe nhạc Sony Walkman (Xanh lá cây)</h4>
                        <p className="font-bold text-center">2,700,000 ₫</p>
                    </div>
                    <div className="col-span-3">
                        <div className="border-2 mt-3">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/91/ma-y-nghe-nha-c-sony-walkman-nw-ws413-4gb-147486771223-7528226-0.jpg" />
                        </div>
                        <h4 className="text-center mt-3">Máy nghe nhạc Sony Walkman (Xanh lá cây)</h4>
                        <p className="font-bold text-center">2,700,000 ₫</p>
                    </div>
                    <div className="col-span-3">
                        <div className="border-2 mt-3">
                            <img src="https://electronic04.web4s.vn/uploads/plugin/products/91/ma-y-nghe-nha-c-sony-walkman-nw-ws413-4gb-147486771223-7528226-0.jpg" />
                        </div>
                        <h4 className="text-center mt-3">Máy nghe nhạc Sony Walkman (Xanh lá cây)</h4>
                        <p className="font-bold text-center">2,700,000 ₫</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;