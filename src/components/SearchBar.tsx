import React, { useState } from "react";

interface Props {
  searchTodos: SearchTodos;
}

export const SearchBar: React.FC<Props> = ({ searchTodos }) => {
  const [query, setQuery] = useState("");
  return (
    <form className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search todos..."
        //Bind the input's value to the query state
        value={query}
        //Update query state on input change
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        className="search-button"
        type="submit"
        //input is submitted on click
        onClick={(e) => {
          //stops page from reloading
          e.preventDefault();
          //searched new todo items using the input value the user provided
          searchTodos(query);
          //resets the input form to blank
          setQuery("");
        }}
      >
        Search Todos
      </button>
    </form>
  );
};
