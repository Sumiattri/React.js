import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <header>
        <nav>
          w<h1 className="logo">ARC Shop</h1>
          <button onClick={() => setIsModalOpen(true)}>Show Cart</button>
          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <Cart />
            </Modal>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
