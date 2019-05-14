import React from 'react';

function SpeechBubble(){
  return(
    <div>
      <p>1 waffle please!</p>
      <style jsx>{`
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 150px;
          border: 3px solid black;
          border-radius: 100%;
        }
      `}</style>
    </div>
  );
}

export default SpeechBubble;
