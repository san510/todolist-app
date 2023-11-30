import { Button } from "../atoms/Button";
import { Filter, ToggleButtonProps } from "../../types/Todo";

const buttons = [
  { type: "all", label: "すべて" },
  { type: "uncompleted", label: "未完了" },
  { type: "completed", label: "完了" },
];

export const ToggleButton = ({ filter, onSort }: ToggleButtonProps) => {
  return (
    <div className="toggle-buttons">
      {buttons.map((button) => (
        <Button
          key={button.type}
          label={button.label}
          className={filter === button.type ? "active" : ""}
          onClick={() => onSort(button.type as Filter)}
        />
      ))}
    </div>
  );
};
