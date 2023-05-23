import React, { useState } from 'react';

export default function Todos({ todos, handleDelete }) {
  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <li>
            <input type='checkbox' name={todo} />
            <label htmlFor={todo}>{todo}</label>
            <button onClick={handleDelete}>삭제</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
