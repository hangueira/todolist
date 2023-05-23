import React from 'react';

export default function Footer({ input, handleClick, handleChange }) {
  return (
    <form onSubmit={handleClick}>
      <label htmlFor='todo'>할일:</label>
      <input type='text' name='todo' value={input} onChange={handleChange} />
      <button>추가하기</button>
    </form>
  );
}
