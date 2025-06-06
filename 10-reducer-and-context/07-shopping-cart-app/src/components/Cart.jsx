import { useCart } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "../CSS/Cart.module.css";
function Cart() {
  const { cart } = useCart();
  // if (cart.lenth === 0) {
  //   return <h1>no items found</h1>;
  // }

  let totalAmount = 0;
  for (let item of cart) {
    totalAmount += item.price * item.quantity;
  }

  return (
    <>
      <div className={styles.cart}>
        <h1 className={styles.cartHeading}>Shopping Cart</h1>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>Total amount : &#8377; {totalAmount}</h1>
    </>
  );
}

export default Cart;
