import { products } from "../../assets/products";
import Card from "../Card/Card";

export default function ProductList({ searchText }) {
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </>
  );
}
