import React from "react";

interface Props {
  todo: Todo;
}

export const TodoDetails: React.FC<Props> = ({ todo }) => {
  return (
    <p className="todo-details">
      {"Details: "}
      {todo.details || "No additional details available for this todo item"}
    </p>
  );
};
