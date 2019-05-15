import React from 'react';

function ActionsForm(){
  return(
    <div className="container">
      <div className='numbersBox'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      <form>
        <p>action = {"{"}</p>
        <p>
          &nbsp; &nbsp; type :
          <input placeholder="action type"></input>
        </p>
        <p>{"}"}</p>
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

export default ActionsForm;
