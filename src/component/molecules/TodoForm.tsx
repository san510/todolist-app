import { Input } from "../atoms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTodoActions } from "../../hooks/useTodoActions";

const TodoForm = () => {
  const { inputValue, addTodo, setInputValue } = useTodoActions();
  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FontAwesomeIcon className="add-todo" icon={faPlus} onClick={addTodo} />
    </form>
  );
};

export default TodoForm;
