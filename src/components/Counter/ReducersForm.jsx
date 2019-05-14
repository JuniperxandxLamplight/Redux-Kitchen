import React from 'react';

function ReducersForm(){
  return(
    <div className="container">
      <div className='numbersBox'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
      <form>
        <p>{'function waffleBot(state = initialState, action){'}</p>
        <p>&nbsp;{'switch(action.type{'}</p>
        <p>&nbsp;&nbsp;{'case \'COOK_WAFFLE\':'}</p>
        <p>&nbsp;&nbsp;&nbsp;{'return {cookedWaffles: cookedWaffles + 1}'}</p>
        <p>
          &nbsp;&nbsp;{'case '}
          <input placeholder="action type"></input>
          {':'}
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;{'return {'}
          <input placeholder="state slice"></input>
          {':'}
          <input placeholder="state slice"></input>
          {' + 1}'}
        </p>
        <p>&nbsp;{'}'}</p>
        <p>{'}'}</p>
        <button type="submit">Dispatch</button>
      </form>
      <style jsx>{`
        .container{
          display: flex;
        };
        input{
          display: inline;
        };
        .numbersBox{
          text-align: center;
          padding: 5px;
          background-color: #D1AF6E;
        };
        form{
          padding: 5px 70px 5px 15px;
          background-color: #C4C4C4;
        };
        button{
          margin-left: 30%;
          padding: 3px 15px;
          border: none;
          border-radius: 5px;
          background-color: red;
        }
      `}</style>
    </div>
  );
}

export default ReducersForm;
