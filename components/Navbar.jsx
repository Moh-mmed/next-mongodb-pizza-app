import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const cartProductQuantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/'><li className={styles.listItem}>Homepage</li></Link>
          <Link href='/'><li className={styles.listItem}>Products</li></Link>
          <Link href='/'><li className={styles.listItem}>Menu</li></Link>
          <Link href='/'><Image src="/img/logo.png" alt="" width={160} height={69} /></Link>
          <Link href='/'><li className={styles.listItem}>Events</li></Link>
          <Link href='/'><li className={styles.listItem}>Blog</li></Link>
          <Link href='/'><li className={styles.listItem}>Contact</li></Link>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href='/cart'>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={30} height={30} />
            <div className={styles.counter}>{cartProductQuantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
