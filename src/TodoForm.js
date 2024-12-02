import React, { useState } from 'react'; // ReactとuseStateフックをインポート

function TodoForm({ dispatch }) {
  const [text, setText] = useState(''); // タスクのテキストを管理するための状態変数とその更新関数を定義

  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を防ぐ
    if (text.trim()) { // テキストが空でない場合
      dispatch({ type: 'add', payload: text }); // 'add'アクションをdispatchし、テキストをペイロードとして渡す
      setText(''); // テキスト入力フィールドを空にリセット
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* フォームの送信イベントをhandleSubmit関数にバインド */}
      <input
        type="text"
        value={text} // テキスト入力フィールドの値を状態変数textにバインド
        onChange={(e) => setText(e.target.value)} // テキスト入力フィールドの値が変わったときに状態変数textを更新
      />
      <button type="submit">Add Todo</button> {/* 送信ボタン */}
    </form>
  );
}

export default TodoForm; // TodoFormコンポーネントをエクスポート
