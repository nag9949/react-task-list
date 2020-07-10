import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, clearAllTasks, handleDelete, handleEdit }) => {
  return (
    <div className="my-3">
      <h3 className="text-white">Task List</h3>

      <ul className="list-group p-1">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>

      <button
        className="btn btn-danger btn-block text-capitalize mt-3"
        onClick={clearAllTasks}
      >
        Clear task List
      </button>
    </div>
  );
};

export default TaskList;
