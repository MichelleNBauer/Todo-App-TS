import { useState, useContext } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { SearchBar } from "./components/SearchBar";
import { TodoDetails } from "./components/TodoDetails";
import "./App.css";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";
import { Footer } from "./components/Footer";
// declaring an array of some initial tasks so we have something on the page
const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: true,
    details: "quantity: 1, location: around the block",
  },
  {
    text: "Write todo app",
    complete: false,
    details: "quantity: 1, location: in the depths of despair",
  },
];

// function to decelare the UI of our application and all functionality that the user can access, i.e. adding/completing/deleting todos
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("App must be used within a ThemeContextProvider");
  }

  const { theme } = themeContext;

  // completing todo items and returning tasks that haven't been completed yet
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) =>
      todo === selectedTodo ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  };

  // adding new todo item to existing array of todos
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, details: "" };
    setTodos([...todos, newTodo]);
  };

  // deleting a todo item
  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
  };

  // displays details when todoitem is clicked
  const displayDetails: DisplayDetails = (todo) => {
    setSelectedTodo(todo);
  };

  // // filters todos based on search query

  const searchTodos: SearchTodos = (query: string) => {
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(query.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  //whats displayed on the page
  return (
    <ThemeContextProvider>
      <div
        className={`app-container ${
          theme === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <div className="search-bar-container">
          <SearchBar searchTodos={searchTodos} />
        </div>
        <div className="list-container">
          <TodoList
            // todos = {filteredTodos}
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            displayDetails={displayDetails}
          />
          {selectedTodo && <TodoDetails todo={selectedTodo} />}
        </div>
        <div className="form-container">
          <AddTodoForm addTodo={addTodo} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
