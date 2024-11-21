import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error();
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
