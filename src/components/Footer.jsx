import React from 'react';

export default function Footer() {
  return (
    <form>
      <label htmlFor='todo'>할일:</label>
      <input type='text' name='todo' />
      <button>추가하기</button>
    </form>
  );
}
