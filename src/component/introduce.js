import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Introduce = ({ products }) => {
    return (
        <div>
            <div className="px-64 bg-gray-300 py-2 ">
                <p className="m-0">Trang chủ  / <span className="m-0">Giới thiệu</span></p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 mt-10 gap-7">
                    {products.map((item, index) => {
                        return (
                            <div className="col-span-3" key={index}>
                                <div><img src={item.image} /></div>
                                <p>17/09/2000</p>
                                <Link to={`${item.id}`}>{item.name}</Link>
                                <div>
                                    <Link to={`${item.id}`}>
                                        <button className="text-green-400 border-2 border-green-400 px-3 py-1 hover:bg-green-500 hover:text-white ">XEM THÊM</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Introduce;
