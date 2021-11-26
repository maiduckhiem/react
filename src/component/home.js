import React, { Component } from "react";
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import Footer from "./footer";
const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const perpage = 3;
const perpage1 = 6;
const currentpage = 1;
const start = 0;
const end = perpage;
const end1 = perpage1;
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
                <div className="grid grid-cols-12 gap-7 mt-10">
                    {products.map((item, index) => {
                        if (index >= start && index < end) {
                            return (
                                <div className="col-span-4" key={index}>
                                    <div className=" border-2">
                                        <img src={item.image} />
                                    </div>
                                    <h4 className="mx-2 text-center">
                                        <div className="text-center"><Link to={`product/${item.id}`}>{item.name}</Link></div>
                                    </h4>
                                    <p className="text-center font-bold">{item.price}</p>
                                </div>
                            );
                        }
                    })}
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
                        {products.map((item, index) => {
                            if (index >= start && index < end) {
                                return (
                                    <div className="col-span-4" key={index}>
                                        <div className=" border-2">
                                            <img src={item.image} />
                                        </div>
                                        <h4 className="mx-2 text-center">
                                            <div className="text-center"><Link to={`product/${item.id}`}>{item.name}</Link></div>
                                        </h4>
                                        <p className="text-center font-bold">{item.price}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="mt-5 grid grid-cols-12 gap-5">
                        <div className="col-span-8"><img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-07-07/custom-banner-11.png" /></div>
                        <div className="col-span-4"><img src="https://electronic04.web4s.vn/uploads/plugin/custom_img/2017-07-07/custom-banner-12.png" /></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl text-green-600 font-bold uppercase mt-10">điện tử - âm thanh</h3>
                    <div className="grid grid-cols-12 gap-5">
                        {products.map((item, index) => {
                            if (index >= start && index < end) {
                                return (
                                    <div className="col-span-4" key={index}>
                                        <div className=" border-2">
                                            <img src={item.image} />
                                        </div>
                                        <h4 className="mx-2 text-center">
                                            <div className="text-center"><Link to={`product/${item.id}`}>{item.name}</Link></div>
                                        </h4>
                                        <p className="text-center font-bold">{item.price}</p>
                                    </div>
                                );
                            }
                        })}
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
                        {products.map((item, index) => {
                            if (index >= start && index < end) {
                                return (
                                    <div className="col-span-4" key={index}>
                                        <div className=" border-2">
                                            <img src={item.image} />
                                        </div>
                                        <h4 className="mx-2 text-center">
                                            <div className="text-center"><Link to={`product/${item.id}`}>{item.name}</Link></div>
                                        </h4>
                                        <p className="text-center font-bold">{item.price}</p>
                                    </div>
                                );
                            }
                        })}
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
                    {products.map((item, index) => {
                        if (index >= start && index < end) {
                            return (
                                <div className="col-span-4" key={index}>
                                    <div className=" border-2">
                                        <img src={item.image} />
                                    </div>
                                    <h4 className="mx-2 text-center">
                                        <div className="text-center"><Link to={`product/${item.id}`}>{item.name}</Link></div>
                                    </h4>
                                    <p className="text-center font-bold">{item.price}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;