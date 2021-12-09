import React from 'react';
import { Pagination, Image } from 'antd';
import Footer from '../../../component/footer';

const Productimage = ({ products }) => {
    return (
        <div>
            <div className="container mx-auto ">
                <p className="m-0">trang chủ /<span className="ml-2 m-0">ảnh</span></p>
                <div>
                    <h4 className="font-bold bg-gray-300 p-3">ẢNH</h4>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-10 mb-10">
                    {products.map((item, index) => {
                        return (
                            <div className="col-span-4" key={index}>
                                <div><Image
                                    src={item.image}
                                /></div>
                            </div>
                        );
                    })}
                </div>
                <Pagination defaultCurrent={1} total={50} className="text-center" />
            </div>
            <Footer />
        </div>
    );
}

export default Productimage;
