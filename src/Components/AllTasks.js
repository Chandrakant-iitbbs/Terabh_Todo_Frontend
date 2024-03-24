import React, { useEffect, useState } from "react";
import TaskState from "../Context/TaskStates";
import { useNavigate } from "react-router-dom";
import SignOut from "./SignOut";
import Task from "./Task";

const AllTasks = () => {
    const { getTasks, addTask } = TaskState;
    const [Tasks, setTasks] = useState([]);
    let navigation = useNavigate();
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        async function fetchTask() {
            try {
                const newRes = [];
                const response = await getTasks();
                for (let i = 0; i < response.length; i++) {
                    const ele = {
                        id: response[i].id,
                        text: response[i].task,
                        check: response[i].is_complete,
                        index: i + 1,
                    };
                    newRes.push(ele);
                }
                setTasks(newRes);
            } catch (error) {
                navigation("/login");
            }
        }
        fetchTask();// eslint-disable-next-line
    }, []);

    const onChangeHandle = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <div className="container my-3 AllTasks_Container">
            <div className="container_leftArrow_headline">
                <div className="leftArrow">
                    {" "}
                    <i
                        className="fa-solid fa-arrow-left leftArrow larrow Cursor"
                        onClick={() => {
                            navigation("/login");
                        }}
                    ></i>
                </div>
                <div className="container Task_headline my-2">Tasks</div>
                {localStorage.getItem("token") ? <SignOut /> : ""}
            </div>
            <div className="container Task_item_container my-6">
                <div>
                    {Tasks.map((val) => {
                        return <Task key={val.id} Task_item={val} />;
                    })}
                </div>
                <div className="inputNewTAsk">
                    <div className="form_NewTAsk">
                        <input
                            type="text"
                            className="form-control my-2 "
                            id="task"
                            placeholder="Enter new task here ..."
                            onChange={(e) => {
                                onChangeHandle(e);
                            }}
                        />
                    </div>
                    <div className="ArrowUp">
                        <i
                            className="fa-solid fa-arrow-up-from-bracket Cursor"
                            onClick={async () => {
                                await addTask(newTask);
                                document.getElementById("task").value = "";
                                const newRes = [];
                                const response = await getTasks();
                                for (let i = 0; i < response.length; i++) {
                                    const ele = {
                                        id: response[i].id,
                                        text: response[i].task,
                                        check: response[i].is_complete,
                                        index: i + 1,
                                    };
                                    newRes.push(ele);
                                }
                                setTasks(newRes);
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTasks;
