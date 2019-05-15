import React from 'react';
import Logo from './Logo';
import styles from './styles';

function Header(){
  return(
    <div className='structure'>
      <style jsx>{`
        .structure{
          width: 100%;
          height: 8vw;
          max-height: 80px;
          background: #B6765A;
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
        }
        .logo {
        }
        `}
      </style>
      <div className='left'></div>
      <div className='center'>
          <Logo/>
      </div>
      <div className='right'></div>
    </div>
  );
}

export default Header;
// <div className='logo'>
// </div>
