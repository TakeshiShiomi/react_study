import { memo } from 'react';
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1= memo(() => {
    const style= {
        backgroundColor: 'lightblue',
    }
    console.log('Child1レンダリング');

  return (
    <>
      <div style ={style}>
        <h2>Child1</h2>
        <Child2/>
        <Child3/>
      </div>
    </>
  );
});
