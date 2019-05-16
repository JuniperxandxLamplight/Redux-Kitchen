import React from 'react';
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
import ActionDayOne from './FormComponents/ActionDayOne';

const { levels } = constants;


class ActionsForm extends React.Component{
  constructor(props){
    super(props);
    this.userLevel = props.userLevel;
    this.customer = props.customerCount;
    this.handleActionSubmission = this.handleActionSubmission.bind(this);
    
  }
  


  handleActionSubmission(userAnswer) {
    
    // check for correct answer
    if (userAnswer === levels[this.userLevel].answersDay[(this.customer - 1)]){
      // check for customer count
      if (this.customer >= 3) {
        // toggle to night and reset cutomercount to 1
        this.props.dispatch(dayToggle());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.customer - 1)]))
      } else {
        // go to the next customer
        this.props.dispatch(nextCustomer());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.customer - 1)]))
      }
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }
  }

  render(){

    return(
      <ActionDayOne onActionSubmission={this.handleActionSubmission}/>
    //   <div className="container">
    //     <div className='numbersBox'>
    //       <p>1</p>
    //       <p>2</p>
    //       <p>3</p>
    //       <p>4</p>
    //       <p>5</p>
    //     </div>
    //     <form onSubmit={handleActionSubmission}>
    //       <p>action = {'{'}</p>
    //       <p>
    //         type :
    //         <input type='text' id='type' placeholder="action type" ref={(input) => {_type = input;}}/>
    //       </p>
    //       <p>{'}'}</p>
    //       <button type="submit">Dispatch</button>
    //     </form>
    //     <style jsx>{`
    //       .container{
    //         display: flex;
    //       }
    //       input{
    //         display: inline;
    //       }
    //       .numbersBox{
    //         text-align: center;
    //         padding: 5px;
    //         background-color: #D1AF6E;
    //       }
    //       form{
    //         padding: 5px 70px 5px 15px;
    //         background-color: #C4C4C4;
    //       }
    //       button{
    //         margin-left: 30%;
    //         padding: 3px 15px;
    //         border: none;
    //         border-radius: 5px;
    //         background-color: red;
    //         cursor: pointer;
    //       }
    //     `}</style>
    //   </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);

