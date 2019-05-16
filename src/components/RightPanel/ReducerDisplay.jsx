import React from 'react';
import robotChef from './../../assets/images/robot2.png';
import constants from './../../constants';
import { connect } from 'react-redux';
const { levels } = constants;
import ReactHtmlParser from 'react-html-parser';

class ReducerDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hideToolTip: true
    };

    this.handleHideReducer = this.handleHideReducer.bind(this);
    this.handleShowReducer = this.handleShowReducer.bind(this);

    this.toolTipInstance = (
      <div className='infoBox'>
        <div className='exit'>
          <h2 onClick={this.handleHideReducer}>[X]</h2>
        </div>
        <div className='reducerText'>
          <div>
            {
              levels[this.props.state.userLevel].reducerData.map(function(lineText, index){
                return <div key={index}>{ReactHtmlParser(lineText)}</div>
              })
            }
          </div>
        </div>

        <style jsx>{`
          .infoBox{
            width: 100%;
            height: auto;
            padding: 1% 4%;
            display: flex;
            flex-direction: column;
            overflow: auto;
          }
          .exit{
            width: 40px;
            right: 3%;
            position: absolute;
            cursor: pointer;
          }
          h2{
            color: #8CB490;
          }
          .reducerText{
            text-align: left;
          }
          ::-webkit-scrollbar{
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #C79A43;
          }
          ::-webkit-scrollbar-thumb {
            background: #8CB490;
          }
        `}</style>
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
        <div className="robotChef">
          <img onClick={this.handleShowReducer} src={robotChef} alt="Robot Chef" style={reducerStyleShow}/>
        </div>
        <div className='robot-container' style={reducerStyleHide}>
          {this.toolTipInstance}
        </div>

        <style jsx>{`
          .reducer-display{
            margin-top: 15%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .robotChef{
            width: 35%;
          }
          h1 {
            font-family: 'Archivo Black', sans-serif;
            color: #b26949;
            text-shadow: 1px 1px #000;
          }
          img{
            height: auto;
            width: 100%;
            cursor: pointer;
          }
          .robot-container{
            border: 4px solid #76674B;
            background-color: #FBD961;
            width: 90%;
            height: 130px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};


export default connect(mapStateToProps)(ReducerDisplay);
