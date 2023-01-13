import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, reset } from "../redux/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {products.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={`/img/${item.product.img}`}
                    fill
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{item.product.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>${item.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{item.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>
                  ${item.price * item.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
