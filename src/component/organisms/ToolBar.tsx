import React, { memo, useContext } from "react";
import { ToggleButton } from "../molecules/ToggleButton";
import { ToggleButtonProps } from "../../types/Todo";
import { TodosContext } from "../../context/TodoContext";
import { Title } from "../atoms/Title";
import { Heading } from "../atoms/Heading";

const ToolBar = memo(({ filter, onSort }: ToggleButtonProps) => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="toolbar">
      <Heading text={"ToDoリスト"} />
      <Title text={`Total: ${todos.length}`} />
      <ToggleButton filter={filter} onSort={onSort} />
    </div>
  );
});

export default ToolBar;
