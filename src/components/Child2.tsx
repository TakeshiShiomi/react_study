import { memo } from 'react';

export const Child2= memo(() => {
    const style= {
        backgroundColor: 'gray',
    }

    console.log('Child2レンダリング');

    return (
      <>
        <div style ={style}>
          <h3>Child2</h3>
        </div>
      </>
    );
  });
