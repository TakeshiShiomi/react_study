import React from 'react';
import {createRoot} from 'react-dom/client';

import { App } from './App';
import { PropsPractice } from './PropsPractice';
import { PropsPractice2 } from './PropsPractice2';
import { ChildrenPractice } from './ChildrenPractice';
import { UseStatePractice } from './UseStatePractice';
import { UseEffectPractice } from './UseEffectPractice';
import { ReRenderingPractice } from './ReRenderingPractice';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
root.render(
  <>
    <App />
    {/* 
    propsとは、コンポーネントに渡す引数のこと
    コンポーネントタグの中に属性として値を渡すことで、コンポーネントに値を渡すことができる
    */}
    <PropsPractice colorName='blue' text='青です' />
    <PropsPractice colorName='green' text='緑です' />
    <PropsPractice2 colorName='red' text='赤です' />

    {/* 
    childrenはReactの組み込みプロパティで、コンポーネントの開始タグと終了タグの間に配置された要素を表します。
     */}
    <ChildrenPractice colorName='pink'>
      子供です(子の色が変わる)
    </ChildrenPractice>

    <UseStatePractice />
    <UseEffectPractice />
    <ReRenderingPractice />
  </>
);
