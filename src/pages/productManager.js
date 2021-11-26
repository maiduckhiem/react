import { Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
  return (
    <div>
        <div className="border-b-2 w-full pb-3">
          <Link to="add" className="uppercase">thêm</Link>
        </div>
        {products.map((item, index) => {
          return (
            <div className="grid grid-cols-2" key={index}>
              <div className="py-2">
                {item.name}
              </div>
              <div className="pl-96 py-2"><button className="mx-4 bg-red-700 text-white p-2 rounded-md" onClick={() => onRemove(item.id)}>Remove</button>
                <Link className="mx-4" to={`${item.id}/edit`}>Edit</Link></div>
            </div>
          );
        })}
    </div>
  );
};
export default ProductManager;
