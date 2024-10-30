import React, { useState } from "react";

//we pass addTodo as a prop in the function below
interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  //Maintain internal text state using useState. This will allow us to maintain the state of the new todo item’s text.
  const [text, setText] = useState("");

  //display the form and submit button
  return (
    <form>
      <input
        className="input-bar"
        placeholder="Enter a todo item"
        type="text"
        //binding the value to the text we enter into the input field
        value={text}
        // Set text in the input’s onChange handler. e.target.value contains the current value.
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        className="add-button"
        type="submit"
        //input is submitted on click
        onClick={(e) => {
          //stops page from reloading
          e.preventDefault();
          //adds new todo item using the input value the user provided
          addTodo(text);
          //resets the input form to blank
          setText("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
