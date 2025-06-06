import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../CSS/Header.module.css";
import Container from "./UI/Container";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <h1 className="logo">ARC Shop</h1>
            <button
              className={styles.showCartButton}
              onClick={() => setIsModalOpen(true)}
            >
              <span className={styles.CartIconAndNumber}>
                <FaCartShopping />
                {totalQuantity > 0 && (
                  <span className={styles.number}>{totalQuantity}</span>
                )}
              </span>
              <span>Cart</span>
            </button>
            {isModalOpen && (
              <Modal closeModal={closeModal}>
                {cart.length ? <Cart /> : <h2>No items found</h2>}
              </Modal>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
