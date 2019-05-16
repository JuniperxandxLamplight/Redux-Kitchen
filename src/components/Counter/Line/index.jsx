import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Line extends React.Component {
  componentDidMount(){
    this.ref.innerHTML = this.props.text;
    console.log(this.ref.innerHTML);
  }

  render() {
    return (
      <p ref={r=>this.ref = r}></p>
    )
  }
}

Line.propTypes = {
  text : PropTypes.string,
}

export default Line;
