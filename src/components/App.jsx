import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import MainGame from './MainGame';
import Welcome from './Welcome';
import Glossary from './Glossary';
import Error404 from './Error404';

import StateContainer from './RightPanel/StateContainer';


function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin : 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Archivo', sans-serif;
          font-size: 16px;
        }
        `}</style>
      <Header/>
      <Glossary/>
      <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/game' component={MainGame} />
          // <Route path='/glossary' component={Glossary} />
          <Route component={Error404} />
      </Switch>

    </div>

  );
}



export default App;
