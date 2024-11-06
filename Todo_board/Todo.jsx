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
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
