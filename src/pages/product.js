import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div><img src={item.image}/></div>
            <div>
              <Link to={`${item.id}`}>Chi tiết</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
