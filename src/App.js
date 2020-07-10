import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";

// const initialState = [
//   {
//     id: uuidv4(),
//     data: "skills",
//   },
//   {
//     id: uuidv4(),
//     data: "job",
//   },
//   {
//     id: uuidv4(),
//     data: "goal",
//   },
// ];

const initialState = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

function App() {
  const [tasks, setTasks] = useState(initialState);
  // take input data
  const [taskdata, setTaskData] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // editId
  const [editId, setEditId] = useState(0);

  // *** functionality ***

  useEffect(() => {
    console.log("we are calling useEffect");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // handle task input
  const handleInput = (e) => {
    setTaskData(e.target.value);
  };

  // handle Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3500);
  };

  // clear items
  const clearAllTasks = () => {
    setTasks([]);

    handleAlert({
      type: "danger",
      text: "all tasks are cleared",
    });
  };

  // handle input submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check input field is  empty or not
    if (taskdata.trim() !== "") {
      // if edit is true edit logic otherwise create a new task logic
      if (edit) {
        let newEditedDataArray = tasks.map((item) => {
          return item.id === editId ? { ...item, data: taskdata } : item;
        });

        setTasks(newEditedDataArray);
        setEdit(false);
        handleAlert({
          type: "success",
          text: "task updated successfully",
        });
      } else {
        // add a new task logic
        let singleItemdata = {
          id: uuidv4(),
          data: taskdata,
        };
        setTasks([...tasks, singleItemdata]);
        handleAlert({
          type: "success",
          text: "task added successfully",
        });
      }

      setTaskData("");
    } else {
      handleAlert({
        type: "danger",
        text: "please Enter a task",
      });
    }
  };

  // handle Edit
  const handleEdit = (tasksid) => {
    let gotEditID = tasks.find((item) => item.id === tasksid);
    const { id, data } = gotEditID;
    setTaskData(data);
    setEditId(id);
    setEdit(true);
  };

  // handle delete
  const handleDelete = (id) => {
    let newTasksData = tasks.filter((item) => item.id !== id);
    setTasks(newTasksData);

    handleAlert({
      type: "danger",
      text: "task deleted",
    });
  };

  return (
    <div className="container bg-secondary shadow-lg my-5">
      <div className="row my-3">
        <div className="col-10 mx-auto col-md-8 m-3 text-center">
          {alert.show && <Alert type={alert.type} text={alert.text} />}
          <TaskInput
            handleInput={handleInput}
            taskdata={taskdata}
            handleSubmit={handleSubmit}
            edit={edit}
          />

          <TaskList
            tasks={tasks}
            clearAllTasks={clearAllTasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
