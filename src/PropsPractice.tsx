import React from 'react';
import './App.css';

interface PropsPracticeProps {
  colorName: string;
  text: string;
}

// propsを分割代入を使用して個々の変数colorNameとtextに割り当てています。
// これにより、propsの値にアクセスするためには単に変数名を使用するだけでよくなる
export const PropsPractice: React.FC<PropsPracticeProps> = ({ colorName, text }) => {
  const colorStyle = {
    color: colorName,
  };

  return (
    <>
      <p style={colorStyle}>{text}</p>
    </>
  );
};
