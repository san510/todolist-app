export type Filter = "all" | "completed" | "uncompleted";

export type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

export type TodosContextProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type TodosProviderProps = {
  children: React.ReactNode;
};

export type ToggleButtonProps = {
  filter: Filter;
  onSort: (filter: Filter) => void;
};

export type InputProps = {
  className?: string;
  type: "text" | "submit" | "checkbox";
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  label?: string;
  className?: string;
  onClick: () => void;
};
