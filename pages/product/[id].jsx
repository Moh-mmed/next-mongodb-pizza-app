import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Product = ({data}) => {
  const {title, prices, img, desc, extraOptions} = data.data
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [options, setOptions] = useState([]);


  const handleOptionCheck = (e, option) => {
    const checked = e.target.checked 
    if (checked) {
      setAdditionalCost(additionalCost + option.price);
      setOptions((prev)=>([...prev, option]))
    } else {
      setAdditionalCost(additionalCost - option.price);
      const newOptions = options.filter(item=>item._id!==option._id)
      setOptions(newOptions);
    }
  }



  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={`/img/${img}`}
            fill
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>${prices[size] + additionalCost}</span>
        <p className={styles.desc}>{desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {extraOptions.map((option) => (
            <div className={styles.options} key={option._id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={(e) => handleOptionCheck(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async (context) => {
  const { query} = context
  const res = await axios.get(`http://localhost:3000/api/products/${query.id}`);
  return {
    props: {
      data: res.data,
    },
  };
};
