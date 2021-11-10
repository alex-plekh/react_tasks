import React from "react";

// import logo from './logo.svg';
import './App.css';
// import Clocks from "./components/MyComponentsClockClass";
import Clocks from "./components/MyComponentsClockFunction";

function App() {
  return (
    <div className="App">
        <p className="App-clock">
        <Clocks />
        </p>
    </div>
  );
}

export default App;
