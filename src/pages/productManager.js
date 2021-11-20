import { Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
  return (
    <table>
      <tbody>
        {products.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => onRemove(item.id)}>Remove</button>
                <Link to={`${item.id}/edit`}>Edit</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductManager;
