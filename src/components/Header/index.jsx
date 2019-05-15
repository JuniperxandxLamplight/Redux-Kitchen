import React from 'react';
import Logo from './Logo';
import styles from './styles';
import { Route, Link } from 'react-router-dom';


function Header(){
  return(
    <div className='structure'>
      <style jsx>{`
        .structure {
          width: 100%;
          height: 7vh;
          background: #B6765A;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .center {
          grid-column: 2 / span 2;
          display: flex;
          flex-flow: row nowrap;
          align-content: center;
          justify-content: center;
        }
        .left{
          grid-column: 1/2;
        }
        .right{
          grid-column: 4/5;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }

        a, a:visited {
          margin-right: 1rem;
          color: #000;
          text-decoration: none;
        }
        .links {
          place-self: center;
        }

        .glossaryContainer {
          grid-column: 4/5;
          background: rgba(199, 170, 113, 0.95);
          padding: 1rem 2rem 2rem 2rem;
          margin-right: 1rem;
          display: grid;
          grid-template-columns: 1fr 3fr;
          grid-column-gap: .25rem;
          grid-row-gap: 1rem;
          z-index: 1000;
          box-shadow: -4px 4px 8px rgba(15, 15, 15, 0.5);
          border-radius: 8px;
          position: fixed;
          top: 84px;
          right: .5rem;
          width: 25vw;
          min-width: 400px;
        }

        h1 {
          grid-column: 1 / span 2;
          font-size: 2rem;
        }

        ul {
          list-style-type: none;
        }

        li a, li a:visited {
          color: blue;
        }

        .term, .def {
          font-size: .85rem;
          line-height: 133%;
        }

        .term {
          font-weight: bold;
        `}
      </style>
        <div className='left'></div>
        <div className='center'>
          <Logo/>
        </div>
        <div className='right'>
          <div className='links'>
            <a href="#">Glossary</a>
            <Link to="/game">Restart</Link>
          </div>
        </div>
    
    </div>


  );
}

export default Header;
