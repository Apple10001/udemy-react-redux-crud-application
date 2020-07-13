import React from 'react';


/* function App() {
  return (
    <h1>
      hello world
    </h1>
  );
} */
/* 
function App() {

  const greeting = "Hi Tom";
  const dom = <h1 className="foo">{greeting}</h1>
  return (
    dom
  );
} */

function App() {

  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I'm clicked")}} />
    </React.Fragment>
    
  );
}

/* class App extends React.Component {
  render(){
    return React.createElement(
      "div",
      null,
      "HEllo,world"
    );
  }
} */

export default App;
