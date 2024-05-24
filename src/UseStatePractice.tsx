import React from 'react';
import { useState } from 'react';
import './App.css';

interface UseStatePracticeProps {
  name?: string;
}

export const UseStatePractice: React.FC<UseStatePracticeProps> = () => {
  // useState関数を使用して、numという変数を定義
  // numが状態を持った変数、setNumが状態を更新するための関数
  // useState関数の引数には初期値を設定
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  // useState関数を使用して、textという変数を定義
  // textが状態を持った変数、setTextが状態を更新するための関数
  // useState関数の引数には初期値を設定
  const [text, setText] = useState('');
  // input要素の値が変更されたときに呼び出される関数
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };


  return (
    <>
      <h1>UseState</h1>
      <p>{num}</p>
      <button onClick={onClickButton}>ボタンを押すと数が増える</button>
      <br />
      <input type="text" value={text} onChange={onChangeText} />
      <p>inputに入力するとテキストが表示される: {text}</p>
    </>
  );
};
