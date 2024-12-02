import React from 'react'; // Reactライブラリをインポート

function TodoItem({ todo, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed} // タスクの完了状態に基づいてチェックボックスの状態を設定
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })} // チェックボックスの状態が変わったときに'toggle'アクションをdispatch
      />
      {todo.text} {/* タスクのテキストを表示 */}
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete {/* 削除ボタンを表示し、クリックされたときに'delete'アクションをdispatch */}
      </button>
    </li>
  );
}

export default TodoItem; // TodoItemコンポーネントをエクスポート
