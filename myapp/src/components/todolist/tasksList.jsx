import TaskItem from "./taskItem";
import styles from "./tasksList.module.css";

const TasksList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className={styles.list}>
      {tasks.map((item, index) => (
        <TaskItem
          onEdit={onEdit}
          index={index}
          onDelete={onDelete}
          key={item.id}
          task={item}
        />
      ))}
    </div>
  );
};
export default TasksList;
