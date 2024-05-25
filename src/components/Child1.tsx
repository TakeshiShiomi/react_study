import { memo } from 'react';
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

interface Child1Props {
  onClickReset: () => void;
}

export const Child1: React.FC<Child1Props> = memo(({ onClickReset }) => {
  const style = {
    backgroundColor: 'lightblue',
  }
  console.log('Child1レンダリング');

  return (
    <>
      <div style={style}>
        <h2>Child1</h2>
        <button onClick={onClickReset}>リセットボタン</button>
        <Child2 />
        <Child3 />
      </div>
    </>
  );
});
