import React from 'react';
import {connect} from 'react-redux';
import ActionsForm from './ActionsForm';
import ReducersForm from './ReducersForm';


function CounterContainer(props) {
  
  let shownForm;
    if (props.state.dayTime){
      shownForm = <ActionsForm />;
    } else {
      shownForm = <ReducersForm />
    }
  
  return (
    <div>I'm the counter!
      {shownForm}
    </div>
  );
}

{/* <ActionsForm />
<ReducersForm/> */}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(CounterContainer);
