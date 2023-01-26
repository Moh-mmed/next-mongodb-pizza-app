import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({data}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${data._id}`} passHref>
        <Image src={`${data.img}`} alt="" width={150} height={150} />
        <h1 className={styles.title}>{data.title}</h1>
        <span className={styles.price}>${data.prices[0]}</span>
        <p className={styles.desc}>{data.desc}</p>
      </Link>
    </div>
  );
};

export default PizzaCard;
