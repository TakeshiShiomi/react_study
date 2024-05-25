import { memo } from 'react';

export const Child4= memo(() => {
    const style= {
        backgroundColor: 'wheat',
    }

    console.log('Child4レンダリング');

    return (
      <>
        <div style ={style}>
          <h2>Child4</h2>
        </div>
      </>
    );
  });
