import React from 'react';
import Window from './Window/WindowContainer';

function MainGame() {
  return(
    <div className='structure'>
      <div className='left'>Left column</div>
      <div className='window'>
        <Window/>
      </div>
      <div className='right'>Right column</div>
      <div className='counter'>Counter</div>

      <style jsx>{`
        .structure{
          width: 100%;
          height: 89vh;
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          grid-template-columns: repeat(4, 1fr);
        }
        .left{
          grid-row: 1/4;
          grid-column: 1/2;
          border-right: 4px solid #76674B;
          border-top: 4px solid #76674B;
          background-color: #C7AA71;
        }
        .window{
          grid-row: 1/3;
          grid-column: 2/4;
          background-color: #8CB490;
          border-top: 4px solid #76674B;
        }
        .right{
          grid-row: 1/4;
          grid-column: 4/5;
          border-top: 4px solid #76674B;
          border-left: 4px solid #76674B;
          background-color: #C7AA71;
        }
        .counter{
          grid-row: 3/4;
          grid-column: 2/4;
          background-color: #76674B;
        }
      `}</style>
    </div>
  );
}

export default MainGame;
