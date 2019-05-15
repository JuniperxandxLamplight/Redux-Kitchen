import React from 'react';
import robotChef from './../../assets/images/robotChef.png';

class ReducerDisplay extends React.Component {
  constructor(){
    super();
    this.state={
      hideToolTip: true
    };

    this.handleHideReducer = this.handleHideReducer.bind(this);
    this.handleShowReducer = this.handleShowReducer.bind(this);

    this.toolTipInstance = (
      <div onClick={this.handleHideReducer}>
        <div className='infoBox'>
          <p>Reducer info goes here. Click to hide.</p>

            <style jsx>{`
              .infoBox{
                width: 100%;
                height: auto;
                padding: 3%;
                text-align: left;
              }
            `}</style>
        </div>
      </div>
    );
  }

  handleHideReducer(event) {
    this.setState({hideToolTip: true});
    console.log('clicked')
  }
  handleShowReducer(event) {
    this.setState({hideToolTip: false});
    console.log('clicked')
  }

  render(){

    const reducerStyleHide = this.state.hideToolTip ? {display: 'none'} : {};
    const reducerStyleShow = this.state.hideToolTip ? {display: 'inline-block'} : {};

    return(
      <div className='reducer-display'>
        <h1>REDUCERS</h1>
        <p>(Click on Robot Chef for Reducer references)</p>
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
            width: 80%;
            cursor: pointer;
          }
          .robot-container{
            border: 4px solid #76674B;
            background-color: #FBD961;
            display: flex;
            justify-content: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default ReducerDisplay;
