import { USERS } from "../../data/Users";
import Card from "../card";
import styles from "./userList.module.css";

const UsersList = () => {
  return (
    <div className={styles.userlist_container}>
      {USERS.map((item, index) => (
        <Card key={item.id} user={item} />
      ))}
    </div>
  );
};
export default UsersList;
