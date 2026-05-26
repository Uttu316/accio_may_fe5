import { MdEdit as EditIcon } from "react-icons/md";
import { MdDelete as DeleteIcon } from "react-icons/md";
import styles from "./taskItem.module.css";

const TaskItem = ({ task, onEdit, onDelete, index }) => {
  const { title, id, priority } = task;

  const getPriorityClass = () => {
    if (priority === "high") return styles.high;
    if (priority === "medium") return styles.medium;
    if (priority === "low") return styles.low;
    return "";
  };

  const getPriority = () => {
    if (priority === "high") return "High";
    if (priority === "medium") return "Medium";
    if (priority === "low") return "Low";
  };

  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <p className={`${styles.priority} ${getPriorityClass()}`}>
        {getPriority()}
      </p>
      <button
        onClick={() => onEdit(task, index)}
        className={`${styles.actionBtn} ${styles.editBtn}`}
      >
        <EditIcon />
      </button>
      <button
        onClick={() => onDelete(id)}
        className={`${styles.actionBtn} ${styles.deleteBtn}`}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
export default TaskItem;
