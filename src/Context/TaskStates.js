const host = "http://127.0.0.1:8000";

// Get all Tasks
const getTasks = async () => {
  const url = `${host}/get_task`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
    }),
  });
  if (response.status !== 200) {
    console.log("Error found");
  } else {
    const json = await response.json();
    return json;
  }
};

// Add a Task
const addTask = async (taskText) => {
  const url = `${host}/create_task`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
      task: taskText,
    }),
  });
  if (response.status !== 200) {
    console.log("Error found");
  } else {
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
  }
};

// Delete a Task
const deleteTask = async (id) => {
  const url = `${host}/delete_task`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      token: localStorage.getItem("token"),
      id: id,
    }),
  });

  if (response.status !== 200) {
    console.log("Error found");
  } else {
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
  }
};

// Update a Task
const updateTask = async (id, taskText) => {
  const url = `${host}/update_task`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      token: localStorage.getItem("token"),
      task: taskText,
      id: id,
    }),
  });
  if (response.status !== 200) {
    console.log("Error found");
  } else {
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
  }
};
// Done a Task
const doneTask = async (id) => {
  const url = `${host}/done_task`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      token: localStorage.getItem("token"),
      id: id,
    }),
  });
  if (response.status !== 200) {
    console.log("Error found");
  } else {
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
  }
};
// eslint-disable-next-line
export default { addTask, deleteTask, doneTask, updateTask, getTasks };
