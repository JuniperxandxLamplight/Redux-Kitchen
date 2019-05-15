import React from 'react';
import {connect} from 'react-redux';
import ActionsForm from './ActionsForm';
import ReducersForm from './ReducersForm';


function CounterContainer(props) {

  let shownForm;
  if (props.state.dayTime){
    shownForm = <ActionsForm />;
  } else {
    shownForm = <ReducersForm />;
  }

  return (
    <div className='counter-container'>
      {shownForm}

      <style jsx>{`
        .counter-container{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
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
