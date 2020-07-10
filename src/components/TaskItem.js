import React from "react";
import { MdEdit, MdDelete, MdLockOutline } from "react-icons/md";

const TaskItem = ({ task, handleDelete, handleEdit }) => {
  const { id } = task;
  return (
    <li className="list-group-item d-flex justify-content-between my-3">
      <h6>
        <span className="text-primary mx-2">
          <MdLockOutline />
        </span>
        {task.data}
      </h6>

      <div>
        <span className="text-success mx-2" onClick={() => handleEdit(id)}>
          <MdEdit />
        </span>

        <span className="text-danger mx-2" onClick={() => handleDelete(id)}>
          <MdDelete />
        </span>
      </div>
    </li>
  );
};

export default TaskItem;
