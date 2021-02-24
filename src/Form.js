import React from "react";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Add todo..."
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
