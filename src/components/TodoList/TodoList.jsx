import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const handleUpdate = (todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
