import React, { Component }  from 'react';
import './App.css';
// import './index.css';
import 'tachyons';
import Timer from './Timer/components/Timer';
class App extends Component {
	render() {

  return ( 
  	<div className="">
    <h1 className="tc"> PomodoroTimer</h1>
     <div className=" ">
     <Timer />
    </div>
    </div>

  );
}
}

export default App;
