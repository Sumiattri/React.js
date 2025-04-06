import { useCart } from "../context/CartProvider";

function Product({ id, title, price, img }) {
  const { addItemToCart } = useCart();

  function handleAdd() {
    const newCartItem = { id: id, title: title, price: price, quantity: 1 };
    addItemToCart(newCartItem);
  }

  return (
    <div
      style={{ padding: "1rem", margin: "1rem", border: "2px solid #343434" }}
    >
      <p>id:{id}</p>
      <img src={img} alt={title} height={200} />
      <p>title:{title}</p>
      <p>price:{price}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default Product;
