import React from 'react';
import './App.css';

// AppPropsという型を定義
interface AppProps {
  name?: string;
}


// () => {}：これはアロー関数を定義する構文。()内には関数の引数を、{}内には関数の本体を記述します
// 他のファイルでも使えるようにするためにexportする
// AppProps型を引数に取るApp関数を定義
export const App: React.FC<AppProps> = () => {

  // ボタンがクリックされたときの処理
  const onClickButton = () => {
    alert('ボタンがクリックされました');
  };

  const colorChangeButton = () => {
    const colorElement = document.getElementById('color');
    if (colorElement) {
      colorElement.style.color = 'red';
    }
  };

  return (
    <>
      <div>Hello!</div>
      <div id='color'>こんにちは!</div>
      {/* 
      onClickButton関数を呼び出すために、onClickイベントに関数を渡している
      */}
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={colorChangeButton}>色を変える</button>
    </>
  );
};
