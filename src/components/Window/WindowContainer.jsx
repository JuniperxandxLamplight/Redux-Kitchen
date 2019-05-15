import React from 'react';
import SpeechBubble from './SpeechBubble';
import Customer from './Customer';
import Upkeep from './Upkeep';

function WindowContainer() {
  return (
    <div className="container">
      <div className="customerBox">
        <Customer/>
        <SpeechBubble/>
      </div>
      <style  jsx>{`
        .container{
          background-color: #8CB490;
          width: 100%;
          height: 100%;
        };
        .customerBox{
          display: grid;
          grid-template: 50% / 2fr 1fr;
        }
        Customer{
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default WindowContainer;


// add in conditionally based on day/night and level
// <Upkeep/>
