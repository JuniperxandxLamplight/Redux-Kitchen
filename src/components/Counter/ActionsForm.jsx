import React from 'react';
<<<<<<< HEAD
=======
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
>>>>>>> master
import constants from './../../constants';
const {levels} = constants;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Line from './Line'

function ActionsForm(props){
<<<<<<< HEAD
=======
  const {dispatch} = props;
>>>>>>> master
  const userLevel = props.userLevel;
  const customer = props.customerCount;
  let _type = null;
  console.log(levelData[userLevel].answersDay[(customer - 1)])

<<<<<<< HEAD
  function handleActionSubmission(event) {
    console.log(_type.value);
    console.log(levels[userLevel])
    if (_type.value === levels[userLevel].answersDay[(customer - 1)]){
      console.log("yes")
=======

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
      console.log(customer);
>>>>>>> master
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }

    _type.value = '';
  }

  return(
    <div className="container">
      <form onSubmit={handleActionSubmission}>
        {
          levels[userLevel].promptDay.map(function(lineText, index){
            return <Line text={lineText} key={index}/>
          })
        }
      </form>

      //Syles for original action form
      // <style jsx>{`
      //   .container{
      //     display: flex;
      //   }
      //   input{
      //     display: inline;
      //   }
      //   .numbersBox{
      //     text-align: center;
      //     padding: 5px;
      //     background-color: #D1AF6E;
      //   }
      //   form{
      //     padding: 5px 70px 5px 15px;
      //     background-color: #C4C4C4;
      //   }
      //   button{
      //     margin-left: 30%;
      //     padding: 3px 15px;
      //     border: none;
      //     border-radius: 5px;
      //     background-color: red;
      //     cursor: pointer;
      //   }
      // `}</style>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);
