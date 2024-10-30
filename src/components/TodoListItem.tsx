import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  displayDetails: DisplayDetails;
}

export const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  deleteTodo,
  displayDetails,
}) => {
  return (
    <li className={todo.complete ? "completed" : ""}>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
      </label>
      <p onClick={() => displayDetails(todo)}>{todo.text}</p>
      <button type="submit" id="delete-button" onClick={() => deleteTodo(todo)}>
        Delete
      </button>
    </li>
  );
};
