import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  displayDetails: DisplayDetails;
}

export const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
  displayDetails,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          displayDetails={displayDetails}
        />
      ))}
    </ul>
  );
};
