import React from 'react';
import Header from './Header';
import GameContainer from './GameContainer';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin : 0;
          padding: 0;
          box-sizing: border-box;
        }
        `}</style>
      <Header/>
    </div>

  );
}



export default App;
