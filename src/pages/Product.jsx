import { Link, useNavigate } from "react-router-dom";
import Products from "../components/Products";
import "./Product.css";
export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4">
        <h2 className="text-center">Explore Our Products</h2>
        <p className="text-center">
          Welcome to our Products Page! Here at ElectroShop, we offer a wide
          selection of top-quality electronics to meet all your tech needs.
          Whether you are looking for the latest smartphones, powerful laptops,
          smart watches, or essential accessories, we have something for
          everyone
        </p>
        <div className="container mt-4">
          <div className="row">
            {Products.map((pro) => (
              <div className="col-md-4 col-sm-6 mb-4" key={pro.id}>
                <div className="card p-3 h-100">
                  <img src={pro.img} alt={pro.name} />
                  <h6>
                    <b>{pro.name}</b>
                  </h6>

                  <h6>${pro.price}</h6>
                  <div className="d-flex gap-2">
                    <Link to={`/product/${pro.id}`}>
                      <button className="btn btn-primary">More detail</button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-primary">Go to Home</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
