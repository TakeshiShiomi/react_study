import { useState, memo } from 'react';
import {Child1} from './components/Child1';
import {Child4} from './components/Child4';


  // カウントアップするとReRenderingPracticeのStateが更新されたことにより、Child1, Child2, Child3, Child4のコンポーネントが再レンダリングされる
  // この時、Child1, Child2, Child3, Child4のコンソールログが表示される
  // メモ化をすると、Propsに変更がない限り再レンダリングされない
  // const ChildMemo = memo(() => {});で書く
export const ReRenderingPractice = memo(() => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  console.log('再レンダリング');


  return (
    <>
      <h1>再レンダリング(コンソール確認)</h1>
      <p>{num}</p>
      <button onClick={onClickButton}>ボタンを押してコンソール確認</button>
      <Child1 />
      <Child4 />
    </>
  );
});
