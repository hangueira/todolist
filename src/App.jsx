import React, { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

export default function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
  // const [todos, setTodos] = useState(initData);
  // const [input, setInput] = useState('');
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setTodos((prev) => [input, ...prev]);
  // };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleDelete = (e) => {
  //   console.log(e);
  // };

  // return (
  //   <>
  //     <Header />
  //     <Todos todos={todos} handleDelete={handleDelete} />
  //     <Footer
  //       input={input}
  //       handleClick={handleClick}
  //       handleChange={handleChange}
  //     />
  //   </>
  // );
}
