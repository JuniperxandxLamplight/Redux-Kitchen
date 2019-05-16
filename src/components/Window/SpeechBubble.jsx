import React from 'react';
import {connect} from 'react-redux';

function SpeechBubble(props){

  let waffleNumber;
  if (props.state.userLevel < 3){
    waffleNumber = 1;
  } else {
    waffleNumber = Math.floor(Math.random()*4);
  }

  let items = ['waffle', 'biscuit'];
  let item;
  if (props.state.userLevel < 2){
    item = 'waffle';
  } else {
    item = items[Math.floor(Math.random()*2)];
  }

  return(
    <div>
      <p>{waffleNumber} {item} please!</p>
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

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(SpeechBubble);
