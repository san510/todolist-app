import React, { useState } from "react";
import ToolBar from "./component/organisms/ToolBar";
import TodoList from "./component/organisms/TodoList";
import TodoForm from "./component/molecules/TodoForm";
import { Filter } from "./types/Todo";
import { TodosProvider } from "./context/TodoContext";

function App() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <TodosProvider>
      <div className="app">
        <div className="container">
          <ToolBar filter={filter} onSort={setFilter} />
          <TodoList filter={filter} />
          <TodoForm />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
