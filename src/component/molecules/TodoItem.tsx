import React from "react";
import { Input } from "../atoms/Input";
import { Todo } from "../../types/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useTodoActions } from "../../hooks/useTodoActions";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Grip } from "../atoms/Grip";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const { editTodo, checkedTodo, updateTodo, keyPressEnter, deleteTodo } =
    useTodoActions();
  const { setNodeRef, transform, transition } = useSortable({
    id: todo.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li key={todo.id} className="todo-card" ref={setNodeRef} style={style}>
      <Grip todo={todo} />
      <Input
        type="checkbox"
        onChange={() => checkedTodo(todo.id, !todo.isDone)}
        checked={todo.isDone}
      />
      <Input
        className={`${todo.isDone ? "completed" : ""}`}
        type="text"
        value={todo.task}
        onChange={(e) => editTodo(todo.id, e.target.value)}
        onBlur={() => updateTodo(todo.id, todo)}
        onKeyDown={(e) => keyPressEnter(todo.id, e)}
        disabled={todo.isDone}
      />
      <FontAwesomeIcon
        className={`delete-icon ${todo.isDone ? "completed" : ""}`}
        icon={faTrashCan}
        onClick={() => deleteTodo(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
