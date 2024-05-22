import React from 'react';
import './App.css';

interface PropsPractice2Props {
  colorName: string;
  text: string;
}

// propsを一つのオブジェクトとして受け取り、それをpropsという名前の変数に割り当てている。
// その後、propsの値にアクセスするためにprops.colorNameやprops.textのようにドット記法を使用。
export const PropsPractice2: React.FC<PropsPractice2Props> = (props) => {
  const colorStyle = {
    color: props.colorName,
  };

  console.log(props);

  return (
    <>
      <p style={colorStyle}>{props.text}</p>
    </>
  );
};
