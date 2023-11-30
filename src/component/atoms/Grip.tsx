import React from "react";
import { Todo } from "../../types/Todo";
import { useSortable } from "@dnd-kit/sortable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

type Props = {
  todo: Todo;
};

export const Grip = ({ todo }: Props) => {
  const { setActivatorNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: todo.id,
    });

  return (
    <div
      className="grip"
      ref={setActivatorNodeRef}
      {...attributes}
      {...listeners}
    >
      <FontAwesomeIcon icon={faGripVertical} />
    </div>
  );
};
