import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

interface UseEffectPracticeProps {
}

export const UseEffectPractice: React.FC<UseEffectPracticeProps> = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  // useEffect(実行したい関数, [依存する値])と書くことで、依存する値が変更されたときに実行される
  // ある値が変更されたときに何か処理をしたい場合に使う
  useEffect(() => {
    alert('numが押されると実装される');
  }, [num]); // numが変更されるたびに、上記の関数が実行されます

  return (
    <>
      <h1>UseEffect</h1>
      <p>{num}</p>
      <button onClick={onClickButton}>ボタンを押すとuseEffectが発火してアラート</button>
    </>
  );
};
