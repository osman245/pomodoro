import React, {Component} from 'react';
import 'tachyons';
import * as timerStates from '../../timerStates';

class TimerHeader extends Component  {
	
	render() {


const leftPad = (val) => {
	if(val < 10)  return `0${val}`
	 return `${val}`;
}



return (
<div >
<div className= "dib left pa2 m2">
<button className="light-red br3 pa3" onClick={this.props.startTimer}>Pomodoro</button>
<button className="light-red br3 pa3"  onClick={this.props.shortBreak}>Short Break</button>
<button className="light-red br3 pa3 "  onClick={this.props.longBreak} >Long Break</button>

<h2 className="tc">
{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}</h2>

     </div>
     </div>
     );
 }
}
    

     export default TimerHeader;