import React from 'react';
import { Link } from "react-router-dom";
const Introducemanager = ({ introduce, onRemove }) => {
    return (
        <div>
            <div className="border-b-2 w-full pb-3">
                <Link to="add" className="uppercase">thêm</Link>
            </div>
            <div className="grid grid-cols-12 mt-2 border-b pb-2">
                <div className="col-span-1 uppercase font-bold">
                    id
                </div>
                <div className=" col-span-1 text-center uppercase font-bold">
                    name
                </div>
                <div className=" col-span-2 text-center uppercase font-bold">
                    image
                </div>

                <div className="col-span-1 text-center uppercase font-bold">
                    ngày tháng
                </div>
                <div className="col-span-2 text-center uppercase font-bold">
                   nội dung chính
                </div>
                <div className="col-span-3 text-center uppercase font-bold">
                description
                </div>
                <div className="col-span-2 text-center uppercase font-bold">

                </div>
            </div>
            {introduce.map((item, index) => {
                return (
                    <div className="grid grid-cols-12 gap-3 mt-2" key={index}>
                        <div className="col-span-1">
                            {index}
                        </div>
                        <div className="py-2 col-span-1">
                            {item.name}
                        </div>
                        <div className="col-span-2 mx-auto">
                            <img className="w-24" src={item.image} />
                        </div>
                        <div className="py-2 col-span-1">
                            {item.date}
                        </div>
                        <div className="py-2 col-span-2">
                            {item.content}
                        </div>
                        <div className="py-2 col-span-3">
                            {item.description}
                        </div>
                        <div className="col-span-2 flex">
                            <div>
                                <button className="mx-4 flex bg-red-700 text-white p-2 rounded-md" onClick={() => onRemove(item.id)}>Remove</button>
                            </div>
                            <div><button className="pt-2"><Link className="mx-4" to={`${item.id}/edit`}>Edit</Link></button></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Introducemanager;
