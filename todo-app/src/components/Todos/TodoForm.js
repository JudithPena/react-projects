import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState([]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={styles.formInput}
        placeholder="add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title="Add" type="submit" className={styles.formButton}>
        Add
      </Button>
    </form>
  );
}
export default TodoForm;
