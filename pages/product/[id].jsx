import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, reset } from '../../redux/cartSlice'

const Product = ({data}) => {
  const product = data.data
  const {title, prices, img, desc, extraOptions} = product
  const [price, setPrice] = useState(prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch()

  const handleSize = (sizeIndex) => {
     const newPrice = price - prices[size] + prices[sizeIndex];
     setSize(sizeIndex);
     setPrice(newPrice);
   };

  const handleOptionCheck = (e, option) => {
    const checked = e.target.checked 
    if (checked) {
      setPrice((prev) => prev + option.price);
      setOptions((prev)=>([...prev, option]))
    } else {
      setPrice((prev) => prev - option.price);
      const newOptions = options.filter(item=>item._id!==option._id)
      setOptions(newOptions);
    }
  }

  const handleAddToCart = () => {
    dispatch(addProduct({product, price, options, quantity}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={img}
            fill
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
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
          <button className={styles.button} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { query} = context
  const res = await axios.get(`http://localhost:3000/api/products/${query.id}`);
  return {
    props: {
      data: res.data,
    },
  };
};

export default Product;

