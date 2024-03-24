import React, { useState } from 'react';
import TaskState from '../Context/TaskState';

const Task = (props) => {
    const { id, text, check, index } = props.Task_item;
    const { deleteTask, updateTask, doneTask } = TaskState;
    const [isCheck, setIsCheck] = useState(check);
    return (
        <div className='my-1 d-flex '>
            <div className='Task_text'>
                <div className='task_index'>Task {index}:</div>
                <div className='txt'>{text}</div>
            </div>
            <div className='contanier my-1 d-flex  float-right' >
                <div className='mx-2 Task_icon'>
                    {isCheck ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square Cursor" onClick={async () => {
                        setIsCheck(true);
                        await doneTask(id);
                        alert("Task checked")
                    }}></i>}
                </div>
                <div className='mx-2 Task_icon'>
                    <i className="fa-solid fa-trash-can Cursor"
                        onClick={() => {
                            deleteTask(id);
                            window.location.reload()
                            alert("Deleted successfully")
                        }}
                    ></i>
                </div >
                <div className='Task_icon'>
                    <i className="fa-solid fa-pen-to-square text-right Cursor" onClick={() => {
                        const updatedTask = prompt("Please enter updated task : ");
                        updateTask(id, updatedTask);
                        window.location.reload()
                        alert("Task updated")
                    }}></i>
                </div>
            </div>
        </div>
    );
}

export default Task;
