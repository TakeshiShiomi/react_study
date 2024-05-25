import { useState, useCallback, memo } from 'react';
import {Child1} from './components/Child1';
import {Child4} from './components/Child4';


  // カウントアップするとReRenderingPracticeのStateが更新されたことにより、Child1, Child2, Child3, Child4のコンポーネントが再レンダリングされる
  // この時、Child1, Child2, Child3, Child4のコンソールログが表示される
  // これを防ぐために、Rmemoを使用する、使用することでコンポーネントのメモ化ができる
  // メモ化をすると、Propsに変更がない限り再レンダリングされない
  // const ChildMemo = memo(() => {});で書く
export const ReRenderingPractice = memo(() => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  // 関数をpropsに渡すとき、コンポーネントをメモ化していても再レンダリングされる(関数の再生成)
  // 再レンダリング等でコードが実行されるたびに関数が再生成されるため、再レンダリングが発生する
  // const onClickReset = () => {
  //   setNum(0);
  // }

  // 関数の再生成を防ぐためにuseCallbackを使用して関数をメモ化する
  // useCallback(関数, [依存する値])で書く
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  console.log('再レンダリング');


  return (
    <>
      <h1>再レンダリング(コンソール確認)</h1>
      <h2>memo, useCallback</h2>
      <p>{num}</p>
      <button onClick={onClickButton}>ボタンを押してコンソール確認</button>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
