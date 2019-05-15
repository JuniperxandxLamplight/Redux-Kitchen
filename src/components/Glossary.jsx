import React from 'react';


function Glossary(){
  return(
    <div className = 'glossaryContainer'>
      <style jsx>{`
          .glossaryContainer {
            background: rgba(199, 170, 113, 0.5);
            padding: 2rem 3rem;
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-column-gap: .25rem;
            grid-row-gap: 1rem;
          }

          h1 {
            grid: 1 / span 2;
            font-size: 2rem;
          }

          li {
            disc-style: none;
          }

          .term, .def {
            font-size: 1rem;
            line-height: 133%;
          }

          .term {
            font-weight: bold;
          }
          `}
      </style>
      <h1>Glossary</h1>
      <div className = 'term'>Action</div>
      <div className = 'def'>An object that represents intention to change state. Although we don't change state directly, we can change a copy of state and assign it back. An action is dispatched to the store and handled by a reducer.</div>

      <div className = 'term'>Dispatch</div>
      <div className = 'def'>To send an action to a reducer, so that it can run. There's nothing special about "dispatch", it's just the keyword used in Redux.</div>

      <div className = 'term'>Payload</div>
      <div className = 'def'>The property on an action that holds any data included. This is an optional property on the action object.</div>

      <div className = 'term'>Reducer</div>
      <div className = 'def'>A function that takes current state and an action as arguments and returns a new version of state. Reducers must be pure functions (return the exact same output for given inputs) and free of side effects.</div>

      <div className = 'term'>Slice</div>
      <div className = 'def'>A slice is just a single piece of state, concerning one piece of functionality in the application. Each slice of state has its own dedicated reducer.</div>

      <div className = 'term'>State</div>
      <div className = 'def'>State is not a unique concept to Redux. What is important to remember is that in Redux, state is read-only; it cannot be directly modified. State is stored as an object tree in the store. It can consist of multiple slices.</div>

      <div className = 'term'>Store</div>
      <div className = 'def'>The object that holds the application's state tree. A Redux application has only one store: a single source of truth.</div>

      <div className = 'term'>Switch, Case</div>
      <div className = 'def'>Javascript syntax that checks a value against a list of cases, like a long if/else if/else chain. It executes the first case that evaluates to true, then proceeds to execute subsequent cases that evaluate to true until it finds a case that evaluates to false. </div>

      <div className = 'term'>More Resources</div>
      <div className = 'def'>
          <ul>
            <li><a href='https:\/\/redux.js.org/glossary' target='_blank'>Redux.js.org</a></li>
            <li><a href='https:\/medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6' target='_blank'>Free Code Camp</a></li>
            <li><a href='https:\/\/www.codecademy.com/articles/glossary-javascript' target='_blank'>Code Academy</a></li>
            <li><a href='https:\/\/lorenstewart.me/2016/11/27/a-practical-guide-to-redux/'  target='_blank'>A Practical Guide to Redux</a></li>
            <li><a href='https:\/\/dev.to/hemanth/explain-redux-like-im-five'  target='_blank'>Explain Redux Like I'm Five</a></li>
          </ul>
      </div>

    </div>
  );
}

export default Glossary;
