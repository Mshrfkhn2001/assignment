import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskItem from './components/Tasktem';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://todo-list-backend-isdg.onrender.com/api/tasks')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = (todo) => {
    axios.post('https://todo-list-backend-isdg.onrender.com/api/tasks', todo)
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
  };

  const updateTodo = (id, updatedtodo) => {
    axios.put(`https://todo-list-backend-isdg.onrender.com/api/tasks/${id}`, updatedtodo)
      .then(res => setTodos(todos.map(todo => todo._id === id ? res.data : todo)))
      .catch(err => console.error(err));
  };

  const deleteTodo = (id) => {
    axios.delete(`https://todo-list-backend-isdg.onrender.com/api/tasks/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TaskForm addtodo={addTodo}/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo._id}
                          className='w-full'
                          >
                            <TaskItem todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  );
};

export default App;
