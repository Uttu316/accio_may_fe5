import { useState } from "react";
import TodoForm from "./todoForm";
import TasksList from "./tasksList";
import styles from "./todoList.module.css";

const TodoList = () => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
  });
  const [tasks, setTasks] = useState([]);
  const [seletedItem, setselectedItem] = useState(null); //to store position of edit item

  const onSave = (e) => {
    e.preventDefault();
    //create a new task
    const tasks = {
      title: formData.title,
      priority: formData.priority,
      id: parseInt(Math.random() * 100000),
    };
    setTasks((curr) => [...curr, tasks]);
    setFormData({
      title: "",
      priority: "",
    }); //reset the form
  };

  const onDelete = (id) => {
    const remainigItems = tasks.filter((i) => i.id !== id);
    setTasks(remainigItems);
  };
  const onEdit = (task, index) => {
    setselectedItem(index);
    setFormData({
      title: task.title,
      priority: task.priority,
    }); // set form with edit task details
  };

  const onUpdate = () => {
    setTasks((curr) => {
      curr[seletedItem] = { ...formData, id: curr[seletedItem].id }; // replace the task on that position in state
      return [...curr];
    });
    setselectedItem(null); //reset the edit item
    setFormData({
      title: "",
      priority: "",
    }); // reset the form
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ToDo List</h2>
      <TodoForm
        seletedItem={seletedItem}
        onSave={onSave}
        setFormData={setFormData}
        formData={formData}
        onUpdate={onUpdate}
      />
      <TasksList onEdit={onEdit} onDelete={onDelete} tasks={tasks} />
    </div>
  );
};
export default TodoList;
