import React from 'react';

const Productimage = ({ products }) => {
    return (
            <div>
                {products.map((item, index) => {
                    return (
                        <div key={index}>
                            <div><img src={item.image} /></div>
                        </div>
                    );
                })}
            </div>
    );
}

export default Productimage;
