import { useNavigate, useParams } from "react-router-dom";
import Products from "./Products";
export default function MoreDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const findProduct = Products.find((pro) => pro.id === Number(id));
  if (!findProduct) {
    return <p>Product not Found</p>;
  }
  return (
    <div className="card p-4 mt-5 m-2 text-center">
      <img
        src={findProduct.img}
        alt={findProduct.name}
        className="card-img-top text-center"
        style={{ width: 200, height: 200 }}
      />
      <h4>Name : {findProduct.name}</h4>
      <h5>Price : {findProduct.price}</h5>
      <p>{findProduct.description}</p>
      <p>Category : {findProduct.category}</p>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Go back
      </button>
    </div>
  );
}
