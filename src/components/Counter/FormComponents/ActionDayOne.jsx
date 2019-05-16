import React from 'react';

function ActionDayOne(props) {
  let _type = null;

  function handleActionSubmission(e){
    e.preventDefault();
    let userAnswer = _type.value;
    props.onActionSubmission(userAnswer);
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
            type :&nbsp;
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

          .numbersBox p, form p {
            font-family: 'Roboto Mono', monospace;

          }
          form{
            padding: 5px 70px 5px 15px;
            background-color: #C4C4C4;
          }

          input {
            font-size: .9rem;
          }

          button{
            margin-left: 30%;
            padding: 3px 15px;
            border: none;
            border-radius: 5px;
            background-color: #b23701;
            cursor: pointer;
            font-size: .9rem;
            color: #fefefe;
            font-family: 'Roboto Mono', monospace;

          }
        `}</style>
      </div>
    );
}

export default ActionDayOne;

// #d84302