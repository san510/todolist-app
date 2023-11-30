import React, { createContext, useState } from "react";
import { Todo, TodosContextProps, TodosProviderProps } from "../types/Todo";

export const TodosContext = createContext<TodosContextProps>({
  todos: [],
  setTodos: () => {},
});

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
