import React from 'react';
import constants from './../../constants';
const {levels} = constants;

import Line from './Line';

function CodeEditor() {
  return (
    <div>
    {levels[1].codeLines.map(function(lineText, index) {
      return <Line text={lineText} key={index}/>
    })}
    </div>
  )
}

export default CodeEditor;
