import React from "react";
import Task from "./Task"; // (assuming you have a Task component)

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          text={task.text} 
          category={task.category} 
          onDelete={() => onDeleteTask(task.text)} 
        />
      ))}
    </div>
  );
}

export default TaskList;
