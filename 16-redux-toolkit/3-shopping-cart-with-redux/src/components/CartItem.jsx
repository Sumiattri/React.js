import { useCart } from "../context/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function CartItem({ id, title, price, img, quantity }) {
  const { handleInc, handleDec, handleDel } = useCart();
  return (
    <div className={styles.cartItems}>
      {/* left */}
      <div className={styles.imgAndTitle}>
        <img className={styles.image} src={img} alt="" />
        <h3 className={styles.title}> {title}</h3>
      </div>
      {/* right */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button onClick={() => handleDec(id)}>
            <AiOutlineMinus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button onClick={() => handleInc(id)}>
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{quantity * price}</p>
        <button
          onClick={() => {
            handleDel(id);
          }}
          className={styles.removeItemBtn}
        >
          <ImCross />
        </button>
      </div>

      {/* -----------old------------ */}
    </div>
  );
}

export default CartItem;
