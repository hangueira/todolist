import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => findTodos());
  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const handleUpdate = (todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
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
function findTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  } else {
    return todos.filter((todo) => todo.status === filter);
  }
}
