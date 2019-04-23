import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var componenetStyles = {
    backgroundColor: 'teal',
    fontFamily: 'sans-serif'
  };
  return (
    <div style={componenetStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
      <style jsx>{`
                h3 {
                    color: darkBlue;
                }
            `}</style>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};


export default Ticket;

