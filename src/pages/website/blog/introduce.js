import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../component/footer';
import { FieldTimeOutlined } from '@ant-design/icons';

const Introduce = ({ introduce }) => {
    return (
        <div>
            <div className="px-64 bg-gray-300 py-2 ">
                <p className="m-0">Trang chủ  / <span className="m-0">Giới thiệu</span></p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 mt-10 gap-7">
                    {introduce.map((item, index) => {
                        return (
                            <div className="col-span-4" key={index}>
                                <div><img src={item.image} /></div>
                                <p className="flex opacity-60 mt-3 m-0"><FieldTimeOutlined  className=" m-0 mt-1 text-xs"/><p className="ml-2 m-0 mt-1 text-xs">{item.date}</p></p>
                                <h4 className="p-0 font-bold uppercase"><Link to={`${item.id}`}>{item.name}</Link></h4>
                                <div>{item.content}</div>
                                <div className="mt-3">
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
