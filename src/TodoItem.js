import React from 'react';

function TodoItem({ todo, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      {todo.text}
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
