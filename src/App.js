import React, { useReducer } from 'react'; // ReactとuseReducerフックをインポート
import TodoForm from './TodoForm'; // TodoFormコンポーネントをインポート
import TodoList from './TodoList'; // TodoListコンポーネントをインポート

const initialState = []; // アプリケーションの初期状態を定義（空のタスクリスト）

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      // 'add'アクションの場合、新しいタスクを現在の状態に追加
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      // 'toggle'アクションの場合、指定されたIDのタスクの完了状態を反転
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      // 'delete'アクションの場合、指定されたIDのタスクを削除
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error(); // 未定義のアクションタイプの場合、エラーをスロー
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState); // useReducerフックを使用して状態とdispatch関数を管理

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} /> {/* TodoFormコンポーネントをレンダリングし、dispatch関数を渡す */}
      <TodoList todos={todos} dispatch={dispatch} /> {/* TodoListコンポーネントをレンダリングし、todosとdispatch関数を渡す */}
    </div>
  );
}

export default App;
