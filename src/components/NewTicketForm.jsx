import React from 'react';
import { v4 } from 'uuid';
import coffee from '../assets/images/coffee.jpg';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
      <img src={coffee} alt="have you had coffee?"/>
    </div>
  );
}

export default NewTicketForm;