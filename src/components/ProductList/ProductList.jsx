import { products } from "../../assets/products";
import Card from "../Card/Card";

export default function ProductList() {
  // const filteredProducts = products.filter(product =>
  //   product.productName.toLowerCase().includes(searchText.toLowerCase())
  // );
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </>
  );
}
