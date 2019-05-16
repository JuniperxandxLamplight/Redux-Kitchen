import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainGame from './MainGame';
import Header from './Header';
import Welcome from './Welcome';
import Glossary from './Glossary';
import Error404 from './Error404';
import { CSSTransitionGroup } from 'react-transition-group';


class App  extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ visible: ! this.state.visible });
    console.log('hello');
  }

  render() {

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

            .modal {
              width: 100%;
              height: 100%;
            }
            `}</style>
          <Header
            handleClick = {this.handleClick}/>

          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/game' component={MainGame} />
            <Route component={Error404} />
          </Switch>
          { this.state.visible ? <Glossary handleClick = {this.handleClick} /> : null }
        </div>

      );
    }
  }

  export default App;
