import React from 'react';
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';

const { levelData } = constants;

function ActionsForm(props){
  const userLevel = props.userLevel;
  const customer = props.customerCount;
  let _type = null;

  function handleActionSubmission(e) {
    e.preventDefault();
    // check for correct answer
    if (_type.value === levelData[userLevel].answersDay[(customer - 1)]){
      // check for customer count
      if (customer >= 3) {
        // toggle to night and reset cutomercount to 1
        props.dispatch(dayToggle());
        props.dispatch(userStateChange(levelData[userLevel].answersDay[(customer - 1)]))
      } else {
        // go to the next customer
        props.dispatch(nextCustomer());
        props.dispatch(userStateChange(levelData[userLevel].answersDay[(customer - 1)]))
      }
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }

    _type.value = '';
  }

  return(
    <div className="container">
      <div className='numbersBox'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      <form onSubmit={handleActionSubmission}>
        <p>action = {'{'}</p>
        <p>
          type :
          <input type='text' id='type' placeholder="action type" ref={(input) => {_type = input;}}/>
        </p>
        <p>{'}'}</p>
        <button type="submit">Dispatch</button>
      </form>
      <style jsx>{`
        .container{
          display: flex;
        }
        input{
          display: inline;
        }
        .numbersBox{
          text-align: center;
          padding: 5px;
          background-color: #D1AF6E;
        }
        form{
          padding: 5px 70px 5px 15px;
          background-color: #C4C4C4;
        }
        button{
          margin-left: 30%;
          padding: 3px 15px;
          border: none;
          border-radius: 5px;
          background-color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    levelData: state.levelData,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);
