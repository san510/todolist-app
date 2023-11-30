import { useState, useCallback, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFetchHelper } from "./useFetchHelper";
import { TodosContext } from "../context/TodoContext";
import { Todo } from "../types/Todo";

export const useTodoActions = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");
  const { getData, postData, putData, deleteData } = useFetchHelper();

  const handleErrorAlert = (error: unknown) => {
    if (error instanceof Error) {
      alert(error.message);
    }
  };

  const getTodos = useCallback(async () => {
    try {
      const response = await getData();
      setTodos(response);
    } catch (error) {
      handleErrorAlert(error);
    }
  }, []);

  const addTodo = useCallback(async () => {
    if (!inputValue) return;
    const newTodo = {
      task: inputValue,
      id: uuidv4(),
      isDone: false,
    };
    try {
      const responseData = await postData(newTodo);
      setTodos((prevTodos) => [...prevTodos, responseData]);
      setInputValue("");
    } catch (error) {
      handleErrorAlert(error);
    }
  }, [inputValue]);

  const deleteTodo = async (id: string) => {
    try {
      await deleteData(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      handleErrorAlert(error);
    }
  };

  const editTodo = (id: string, task: string) => {
    try {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, task } : todo))
      );
    } catch (error) {
      handleErrorAlert(error);
    }
  };

  const checkedTodo = async (id: string, isDone: boolean) => {
    try {
      const updatedTodo = todos.find((todo) => todo.id === id);
      if (updatedTodo) {
        await putData(id, { ...updatedTodo, isDone });
      }
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isDone } : todo
      );
      setTodos(newTodos);
    } catch (error) {
      handleErrorAlert(error);
    }
  };

  const updateTodo = async (id: string, todo: Todo) => {
    try {
      const findTodo = todos.find((todo) => todo.id === id);

      if (findTodo) {
        await putData(id, todo);
      }
    } catch (error) {
      handleErrorAlert(error);
    }
  };

  const keyPressEnter = async (
    id: string,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      try {
        const todoUpdate = todos.find((todo) => todo.id === id);
        if (todoUpdate) {
          await updateTodo(id, todoUpdate);
        }
      } catch (error) {
        handleErrorAlert(error);
      }
    }
  };

  return {
    inputValue,
    setInputValue,
    getTodos,
    addTodo,
    deleteTodo,
    editTodo,
    checkedTodo,
    updateTodo,
    keyPressEnter,
  };
};
