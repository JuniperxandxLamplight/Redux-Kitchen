import React from 'react';
import Logo from './Logo';
import styles from './styles';

function Header(){
  return(
    <div className='structure'>
      <style jsx>{`
        .structure{
          width: 100%;
          height:80px;
          background: #B6765A;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
        }
        .center {
          grid-column: 2 / span 2;
          display: flex;
          border: 1px solid #f0f;
        }
        .left{
          grid-column: 1/2;
          border: 1px solid #00f;
        }
        .right{
          grid-column: 4/5;
          border: 1px solid #0f0;
        }
        .logo {
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-content: center;

        }
        `}
      </style>
      <div className='left'></div>
      <div className='center'>
        <div className='logo'>
          <Logo/>
        </div>
      </div>
      <div className='right'></div>
    </div>
  );
}

export default Header;
