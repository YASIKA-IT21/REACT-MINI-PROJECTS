import React, { useState } from 'react';

const Todo = () => {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

 
  const handleTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };
const remove=(index)=>{
    const updatedlist = [...taskList];
    updatedlist.splice(index,1);
    setTaskList(updatedlist);

}
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {taskList.map((task, index) => (
            <>
          <li key={index}>{task}</li>
          <button onClick={()=>remove(index)}>Remove</button>
          </>
        ))}
       
      </ul>
    </div>
  );
};

export default Todo;
