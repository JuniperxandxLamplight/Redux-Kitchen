import React from 'react';
import waffle from './../../assets/images/waffle.png';
import syrup from './../../assets/images/syrup.png';
import constants from './../../constants';
import {connect} from 'react-redux';

function Upkeep(props){

  const instructions = constants.levelData[props.state.userLevel].nightInstructions.split("*>");
  return(
    <div>
      <img className="waffle" src={waffle} alt="waffle"/>
      <img className="syrup" src={syrup} />
      <div className="instructions">
        {instructions.map((paragraph) => {
          return <p>{paragraph}</p>
        })}
      </div>
      <style jsx>{`
        div{
          width: 100%;
          height: 100%;
          display: grid;
          grid-template: 1fr 2fr 10fr / 1fr 2fr 10fr;
        };
        .waffle{
          z-index: 1;
          width: 100%;
          height: auto;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
        };
        .syrup{
          width: 100%;
          height: 100%;
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 4;
        };
        .instructions{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 4;
        };
        p{
          width: 76%;
          margin-left: 12%;
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

export default connect(mapStateToProps)(Upkeep);
