import React,{Component} from 'react';
import 'tachyons';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerButton from '../../TimerButton/components/TimerButton';
import * as timerStates from '../../timerStates';
import moment from 'moment';
import Sound from 'react-sound';



class Timer extends Component {
constructor() {
	super();


this.state = {
  currentTime:moment.duration(25,'minutes'),
	baseTime:moment.duration(25,'minutes'),
    timerStates: timerStates.NOT_SET,
    timer:null,
	};



}



setBaseTime = this.setBaseTime.bind(this);
startTimer = this.startTimer.bind(this);
reduceTimer = this.reduceTimer.bind(this);
stopTimer = this.stopTimer.bind(this);
shortBreak = this.shortBreak.bind(this);
longBreak = this.longBreak.bind(this);
resumeTimer = this.resumeTimer.bind(this);




startTimer() {

    this.setState({
  timerState: timerStates.RUNNING,
    currentTime: moment.duration(25,"minutes"),
  timer: setInterval(this.reduceTimer,1000),
  
      })
}

resumeTimer() {
  if(this.timerState !== timerStates.RESUME) {
 this.setState({
  timerState: timerStates.RESUME,
  timer: setInterval(this.reduceTimer,1000)
  
      })
}
}




stopTimer() {
    
   
    
        if(this.state.timer) {
            clearInterval(this.state.timer);
        }
        
    this.setState({
  timerState: timerStates.STOP,
  timer:null,
  currentTime: moment.duration(this.state.currentTime),
});

    }


longBreak() {

  if(this.state.timer) {
            clearInterval(this.state.timer);
        }

 this.setState({

  currentTime:moment.duration(10,"minutes"),
  timerState: timerStates.RUNNING,
   timer: setInterval(this.reduceTimer,1000),
      })
}

shortBreak() {
 
 if(this.state.timer) {
            clearInterval(this.state.timer);
        }

this.setState({
  currentTime:moment.duration(5,"minutes"),
  timerState: timerStates.RUNNING,
  timer: setInterval(this.reduceTimer,1000),
      })

}
        




reduceTimer() {
if (this.state.currentTime.get('hours') === 0 
     && this.state.currentTime.get('minutes') === 0 
     && this.state.currentTime.get('seconds') === 0)
     {
this.completeTimer();
return;
}
const newTime = moment.duration(this.state.currentTime);
newTime.subtract(1,'second');

this.setState({
    currentTime: newTime,
});

}




setBaseTime(newBaseTime) {
	this.setState({
	baseTime: newBaseTime,
    currentTime: newBaseTime
	});
}

completeTimer() {

 if(this.state.timer) {
            clearInterval(this.state.timer);
        }
        
    this.setState({
  timerState: timerStates.COMPLETE,
  timer:null,
})





}
     
render() {

return (
<div className="ba br4">
     <TimerHeader  currentTime= {this.state.currentTime}
  startTimer = {this.startTimer} shortBreak = {this.shortBreak} longBreak = {this.longBreak} />
    <TimerButton resumeTimer = {this.resumeTimer} stopTimer = {this.stopTimer}/>
 
<Sound
      url="pomodoro.mp4"
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
 
    

     </div>
);


}
}

export default Timer;









