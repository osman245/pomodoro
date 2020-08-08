import React from 'react';
import 'tachyons';
const TimerButton = (props) => {

return (
 <div className="dib tc">
 <button className = "black br3" onClick = {props.resumeTimer}> Resume</button>
 <button className = "black bg-white br3 " onClick = {props.stopTimer}>Stop</button>
 </div>

	);


}
export default TimerButton;