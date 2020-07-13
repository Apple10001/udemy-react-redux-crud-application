import React, { useReducer } from 'react';
import PropTypes from 'prop-types';


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

/* function App() {

  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I'm clicked")}} />
    </React.Fragment>
    
  );
} */

/* class App extends React.Component {
  render(){
    return React.createElement(
      "div",
      null,
      "HEllo,world"
    );
  }
} */

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "noname", age: 1}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) =>{
return <div>Hi, I'm {props.name} and {props.age} yaers old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
