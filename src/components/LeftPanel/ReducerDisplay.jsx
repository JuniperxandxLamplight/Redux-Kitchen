import React from 'react';
import robotChef from './../../assets/images/robot2.png';

class ReducerDisplay extends React.Component {
  constructor(){
    super();
    this.state={
      hideToolTip: true
    };

    this.handleHideReducer = this.handleHideReducer.bind(this);
    this.handleShowReducer = this.handleShowReducer.bind(this);

    this.toolTipInstance = (
      <div>
        <div className='infoBox'>
        <h2 onClick={this.handleHideReducer}>[X]</h2>
          <p>Reducer info goes here. Click X to hide.</p>

            <style jsx>{`
              .infoBox{
                width: 100%;
                height: auto;
                padding: 3%;
                text-align: left;
              }
              h2{
                text-align: right;
                margin-bottom: 3%;
                cursor: pointer;
              }
            `}</style>
        </div>
      </div>
    );
  }

  handleHideReducer() {
    this.setState({hideToolTip: true});
    console.log('clicked')
  }
  handleShowReducer() {
    this.setState({hideToolTip: false});
    console.log('clicked')
  }

  render(){

    const reducerStyleHide = this.state.hideToolTip ? {display: 'none'} : {};
    const reducerStyleShow = this.state.hideToolTip ? {display: 'inline-block'} : {};

    return(
      <div className='reducer-display'>
        <h1>REDUCERS</h1>
        <img onClick={this.handleShowReducer} className="robotChef" src={robotChef} alt="Robot Chef" style={reducerStyleShow}/>
        <div className='robot-container' style={reducerStyleHide}>
          {this.toolTipInstance}
        </div>

        <style jsx>{`
          .reducer-display{
            margin-top: 25%;
            text-align: center;
          }
          img{
            height: auto;
            width: 60%;
            cursor: pointer;
          }
          h1 {
            font-family: 'Archivo Black', sans-serif;
            color: #b26949;
            text-shadow: 1px 1px #000;
          }
          .robot-container{
            border: 4px solid #76674B;
            background-color: #FBD961;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default ReducerDisplay;
