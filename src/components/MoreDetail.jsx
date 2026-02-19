import { useParams } from "react-router-dom";
import Product from "../pages/Product";
export default function MoreDetail() {
  const { id } = useParams();
  const findProduct = Product.find((pro) => pro.id === Number(id));
  if (!findProduct) {
    return <p>Product not Found</p>;
  }
  return (
    <div className="card text-center">
      <h4>Name : {findProduct.name}</h4>
      <h5>Price : {findProduct.price}</h5>
      <p>{findProduct.info}</p>
      <button className="btn-warning">Category : {findProduct.category}</button>
    </div>
  );
}
