import React from 'react';
import { Link } from "react-router-dom";
const Categorymanager = ({ categories, onDelete }) => {
    return (
        <div>
            <div className="border-b-2 w-full pb-3">
                <Link to="add" className="uppercase">thêm</Link>
            </div>
            <div className="grid grid-cols-12 mt-2 border-b pb-2">
                <div className="col-span-2 uppercase font-bold">
                    id
                </div>
                <div className=" col-span-4 uppercase font-bold">
                    name
                </div>
                <div className=" col-span-6 text-center uppercase font-bold">
                    
                </div>
            </div>
            {categories.map((items, index) => {
                return (
                    <div className="grid grid-cols-12" key={index}>
                        <div className="py-2 col-span-2">
                            {index}
                        </div>
                        <div className="py-2 col-span-4">
                            {items.name}
                        </div>
                        <div className="pl-96 py-2 col-span-6"><button className="mx-4 bg-red-700 text-white p-2 rounded-md" onClick={() => onDelete(items.id)}>Remove</button>
                            <Link className="mx-4" to={`${items.id}/edit`}>Edit</Link></div>
                    </div>
                )
            })}
        </div>
    );
}

export default Categorymanager;
