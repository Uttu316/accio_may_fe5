import styles from "./card.module.css";
import { FaMale as MaleIcon } from "react-icons/fa";
import { FaFemale as FemaleIcon } from "react-icons/fa";

const Card = (props) => {
  const { user } = props;

  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={user.avatar} alt={user.name} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.city}>{user.city}</p>
      <p className={styles.age}>Age: {user.age}</p>
      <p className={styles.gender}>
        Gender: {user.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
      </p>
    </div>
  );
};

export default Card;
