import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1);
  };

  const onMinus = () => {
    console.log("A");
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    setX((currX) => currX - 1);
    console.log("B", x);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <p className={styles.count}>{x}</p>
      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.btnAdd}`} onClick={onAdd}>
          Add
        </button>
        <button
          className={`${styles.btn} ${styles.btnMinus}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default Counter;
