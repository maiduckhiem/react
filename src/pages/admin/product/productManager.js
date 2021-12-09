import { Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
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
          image
        </div>

        <div className="col-span-2 text-center uppercase font-bold">
          giá
        </div>
        <div className="col-span-3 text-center uppercase font-bold">
          trạng thái
        </div>
        <div className="col-span-2 text-center uppercase font-bold">

        </div>
      </div>
      {products.map((item, index) => {
        return (
          <div className="grid grid-cols-12 mt-2" key={index}>
            <div className="col-span-1 py-3">
              {index}
            </div>
            <div className="py-4 col-span-2 mx-auto">
              {item.name}
            </div>
            <div className="col-span-2"><img className="w-24 mx-auto" src={item.image} /></div>
            <div className="col-span-2 py-3 mx-auto">
              {item.price}
            </div>
            <div className="col-span-3 my-4 mx-auto font-bold ">{item.status}</div>
            <div className=" py-2 col-span-2 ">
              <div>
                <button className="mx-4 bg-red-700 text-white p-2 rounded-md" onClick={() => onRemove(item.id)}>Remove</button>
                <Link className="mx-4 py-3" to={`${item.id}/edit`}>Edit</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductManager;
