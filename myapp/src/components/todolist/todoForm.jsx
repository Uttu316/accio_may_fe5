import styles from "./todoForm.module.css";

const TodoForm = ({ formData, onUpdate, seletedItem, onSave, setFormData }) => {
  const onInput = (e) => {
    const { value, id } = e.target;
    setFormData((curr) => ({
      ...curr,
      [id]: value,
    }));
  };
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="title">
          Title
        </label>
        <input
          className={styles.input}
          value={formData.title}
          onChange={onInput}
          placeholder="Enter a task..."
          id="title"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="priority">
          Priority
        </label>
        <select
          className={styles.select}
          value={formData.priority}
          id="priority"
          onChange={onInput}
        >
          <option value={""} disabled>
            Select Priority
          </option>
          <option value={"high"}>High</option>
          <option value={"medium"}>Medium</option>
          <option value={"low"}>Low</option>
        </select>
      </div>
      {seletedItem === null && (
        <button className={styles.saveBtn} onClick={onSave}>
          Save
        </button>
      )}
      {seletedItem !== null && (
        <button className={styles.saveBtn} onClick={onUpdate}>
          Update
        </button>
      )}
    </form>
  );
};

export default TodoForm;
