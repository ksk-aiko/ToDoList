import React from 'react'; // Reactライブラリをインポート
import TodoItem from './TodoItem'; // TodoItemコンポーネントをインポート

function TodoList({ todos, dispatch }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} /> // 各タスクをTodoItemコンポーネントとしてレンダリングし、キー、タスク、dispatch関数を渡す
      ))}
    </ul>
  );
}

export default TodoList; // TodoListコンポーネントをエクスポート
