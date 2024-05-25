import { memo } from 'react';

export const Child3= memo(() => {
    const style= {
        backgroundColor: 'gray',
    }

    console.log('Child3レンダリング');

    return (
      <>
        <div style ={style}>
          <h3>Child3</h3>
        </div>
      </>
    );
  });
