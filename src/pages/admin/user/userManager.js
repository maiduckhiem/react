import React from 'react';
import { Link } from 'react-router-dom';
const Usermanager = ({ user, Remove }) => {
    return (
        <div>
            <div className="border-b-2 w-full pb-3">
                <Link to="add" className="uppercase">thêm</Link>
            </div>
            <div className="grid grid-cols-12 mt-2 border-b pb-2">
                <div className="col-span-1 uppercase font-bold">
                    id
                </div>
                <div className=" col-span-2 text-center uppercase font-bold">
                    name
                </div>
                <div className=" col-span-2 text-center uppercase font-bold">
                    middle-Name
                </div>

                <div className="col-span-2 text-center uppercase font-bold">
                    email
                </div>

            </div>
            {user.map((item, index) => {
                return (
                    <div key={index} className="grid grid-cols-12">
                        <div className="col-span-1 py-3">
                            {index}
                        </div>
                        <div className="py-4 col-span-2 mx-auto">
                            {item.name}
                        </div>
                        <div className="col-span-2 py-3 mx-auto">
                            {item.middleName}
                        </div>
                        <div className="col-span-3 my-4 mx-auto font-bold ">{item.email}</div>
                        <div className=" py-2 col-span-3 ">
                            <div>
                                <button className="mx-4 bg-red-700 text-white p-2 rounded-md" onClick={() => Remove(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Usermanager;
