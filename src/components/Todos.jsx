import React, { useState } from 'react';

const initData = ['공부하기', '청소하기', '운동하기'];

export default function Todos() {
  const [todos, setTodos] = useState(initData);

  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </main>
  );
}
