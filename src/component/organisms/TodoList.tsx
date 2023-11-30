import React, { useContext, useEffect, useMemo } from "react";
import TodoItem from "../molecules/TodoItem";
import { useTodoActions } from "../../hooks/useTodoActions";
import { TodosContext } from "../../context/TodoContext";
import { Filter } from "../../types/Todo";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";

type Props = {
  filter: Filter;
};

const TodoList = ({ filter }: Props) => {
  const { getTodos } = useTodoActions();
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    getTodos();
  }, []);

  const filterTodos = useMemo(() => {
    return todos.filter((todo) => {
      switch (filter) {
        case "all":
          return todo;
        case "completed":
          return todo.isDone;
        case "uncompleted":
          return !todo.isDone;
        default:
          return todo;
      }
    });
  }, [todos, filter]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const oldIndex = todos.findIndex((v) => v.id === active.id);
    const newIndex = todos.findIndex((v) => v.id === over.id);
    if (oldIndex !== newIndex) {
      setTodos(arrayMove(todos, oldIndex, newIndex));
    }
  };

  return (
    <main className="todo-list">
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <ul>
            {filterTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </main>
  );
};

export default TodoList;
