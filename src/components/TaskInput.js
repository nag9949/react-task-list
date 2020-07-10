import React from "react";
import { MdAssignment } from "react-icons/md";

const TaskInput = ({ handleInput, taskdata, handleSubmit, edit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="text-white">Task Input</h3>
        <div className="card card-body my-3 font-smaller">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text text-white bg-info">
                <MdAssignment />
              </span>
            </div>

            <input
              type="text"
              name="text"
              id="text"
              className="form-control"
              placeholder="add a task"
              value={taskdata}
              onChange={handleInput}
            />

            <button
              type="submit"
              className="btn btn-info btn-block text-capitalize mt-3"
            >
              {edit ? "Edit the Task" : "add Task"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskInput;
