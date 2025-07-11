import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || "Code");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1] || "Code");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="task-form">
  <label htmlFor="task-details">Details</label>
  <input 
    id="task-details"
    type="text" 
    placeholder="New task details" 
    value={text}
    onChange={(e) => setText(e.target.value)} 
  />

  <label htmlFor="task-category">Category</label>
  <select 
    id="task-category"
    value={category} 
    onChange={(e) => setCategory(e.target.value)}
  >
    {categories
      .filter((cat) => cat !== "All")
      .map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
    ))}
  </select>

  <button type="submit">Add Task</button>

</form>

  );
}

export default NewTaskForm;
