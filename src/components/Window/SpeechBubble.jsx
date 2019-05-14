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
          width: 90%;
          margin-right: 10%;
          height: 150px;
          border: 3px solid black;
          border-radius: 75%;
          background-color: white;
        }
      `}</style>
    </div>
  );
}

export default SpeechBubble;
