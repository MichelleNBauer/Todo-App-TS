declare global {
  interface Todo {
    text: string;
    complete: boolean;
    details?: string | null;
  }

  type ToggleTodo = (selectedTodo: Todo) => void;
  type AddTodo = (text: string) => void;
  type DeleteTodo = (todo: Todo) => void;
  type DisplayDetails = (todo: Todo) => void;
  type SearchTodos = (query: string) => void;
}

export {};

// type is global to the project so declaring it in a separate file -> compiler recognises this, so we dont need to explicitly export or import
