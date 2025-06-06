import { RemoveItemToCart, IncQty, DcQty } from "../features/cart/cartSlice";
import styles from "../CSS/CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

function CartItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(DcQty({ id }))}>
            <AiOutlineMinus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button onClick={() => dispatch(IncQty({ id }))}>
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{quantity * price}</p>
        <button
          onClick={() => {
            dispatch(RemoveItemToCart({ id }));
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
