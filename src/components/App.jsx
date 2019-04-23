import React from 'react';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;