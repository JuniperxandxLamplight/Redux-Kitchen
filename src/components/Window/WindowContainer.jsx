import React from 'react';
import SpeechBubble from './SpeechBubble';
import Customer from './Customer';
import Upkeep from './Upkeep';
import {connect} from 'react-redux';

function WindowContainer(props){

  let custView;
  let speechView;
  let nightView;

  if (props.state.dayTime){
      custView = true,
      speechView = true,
      nightView = false
  } else {
      custView = false,
      speechView = false,
      nightView = true
  }

  return (
    <div className="container">
      <div className="customerBox">
        {custView &&
        <Customer/>}
        {speechView &&
        <SpeechBubble/>}
      </div>
      {nightView &&
      <Upkeep/>}
      <style  jsx>{`
        .container{
          background-color: #8CB490;
          width: 100%;
          height: 100%;
        }
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

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(WindowContainer);
