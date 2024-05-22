import React from 'react';
// childrenプロパティを受け取るためにReactNodeをインポート
import { ReactNode } from 'react';
import './App.css';

interface ChildrenPracticeProps {
  colorName: string;
  text?: string;
  // childrenプロパティを受け取るためにReactNodeを型定義
  children?: ReactNode;
}

// TypeScriptは型チェックを行うため、childrenプロパティを明示的に型定義に含める必要があります。
// ChildrenPracticePropsインターフェースにchildrenプロパティを追加することで、この問題を解決できます。
// childrenは任意のReactノードを受け取ることができるため、型は通常ReactNodeとします。
export const ChildrenPractice: React.FC<ChildrenPracticeProps> = (props) => {
  const colorStyle = {
    color: props.colorName,
  };

  console.log(props);

  return (
    <>
      {/* childrenプロパティを表示 */}
      <p style={colorStyle}>{props.children}</p>
    </>
  );
};
