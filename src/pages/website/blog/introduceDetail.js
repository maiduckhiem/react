import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {read} from "../../../api/introduceAPI";
import React from 'react';
import Footer from "../../../component/footer";

const Introducedetail = () => {
    const { id } = useParams();
    const [introduce, setIntroduce] = useState({});
    useEffect(() => {
        // khai báo hàm getIntroduce
        const getIntroduce = async () => {
            try {
                // call API lấy thông tin sản phẩm thông qua ID gửi lên
                const { data } = await read(id);
                setIntroduce(data);
            } catch (error) { }
        };
        getIntroduce();
    }, [id]);
    return introduce && <div>
        <div className="container mx-auto ">
            <p className="text-xs m-1">trang chủ / <span>Điện máy</span></p>
            <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-6  mt-9 z-10" style={{width:600}}>
                    <img className="image-detail" src={introduce.image} />
                </div>
                <div className="col-span-6  border-4 pl-24 pr-5 pt-16"style={{height:414}}>
                    <h4 className=" text-3xl text-green-500 font-bold pb-2">{introduce.name}</h4>
                    <p className="font-bold text-xs">{introduce.content}</p>
                </div>
            </div>
            <div>{introduce.description}</div>
        </div>
        <Footer />
    </div>
}

export default Introducedetail;
