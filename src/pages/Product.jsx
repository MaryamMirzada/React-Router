import Products from "../components/Products";
export default function Product() {
  return (
    <div>
      <h2>Explore Our Products</h2>
      <p>
        Welcome to our Products Page! Here at ElectroShop, we offer a wide
        selection of top-quality electronics to meet all your tech needs.
        Whether you are looking for the latest smartphones, powerful laptops,
        smart watches, or essential accessories, we have something for everyone
      </p>
      {Products.map((pro) => (
        <div className="card" key={pro.id}>
          <h3>
            <b> {pro.name}</b>
          </h3>
          <h5>{pro.price}</h5>
        </div>
      ))}
    </div>
  );
}
