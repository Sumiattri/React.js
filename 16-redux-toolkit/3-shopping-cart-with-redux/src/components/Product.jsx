import { addItemToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import styles from "../CSS/Product.module.css";

function Product({ id, title, price, img }) {
  const dispatch = useDispatch();

  function handleAdd() {
    // for (let item of cart) {
    //   if (item.id === id) {
    //     alert("Item already added to cart");
    //     return;
    //   }
    // }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      quantity: 1,
      img: img,
    };
    dispatch(addItemToCart(newCartItem));
  }

  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{`₹${price}`}</p>
      <button className={styles.AddToCartButton} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
