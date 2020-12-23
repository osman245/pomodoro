import React, { Component }  from 'react';
import './App.css';
import 'tachyons';
import Timer from './Timer/components/Timer';
class App extends Component {
	render() {

  return ( 
  	<div className=" app-content bg-light-red">
    <h1 className=" auto centr white"> PomodoroTimer</h1>
     <div className=" ba br4 ">
     <Timer />
    </div>
    </div>

  );
}
}

export default App;
