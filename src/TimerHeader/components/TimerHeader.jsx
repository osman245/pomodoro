import React, {Component} from 'react';
import 'tachyons';



class TimerHeader extends Component  {
	
	render() {


const leftPad = (val) => {
	if(val < 10)  return `0${val}`
	 return `${val}`;
}



return (
<div class="container">
<div>
<nav class="bg-white db dt-l w-100 border-box pa3 ph5-l ">
  <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
    <img class="w1" src="./logo_transparent.png" class="dib w2 h2 br-100" alt="Site Name"/>
  </a>
  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l ">
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l " href="#1" title="Pomodoro">Pomodoro</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l " href="#2" title="Pomodoro Technique">Pomodoro Technique</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" target="_blank" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" title="Pomodoro Wikipedia">Pomodoro Wikipedia</a>
    <a class="link dim dark-gray f6 f5-l dib" href="id = #3" title="About">About</a>
  </div>
</nav>   
</div>


<div id="1" className= "row">
<h1 className="tc"> PomodoroTimer</h1>
</div>

<div className="row">
<button type ="button" className="  light-red br3 pa2 grow bg-white b" onClick={this.props.startTimer}>Pomodoro</button>
<button className=" light-red  br3 pa3 grow b  bg-white"  onClick={this.props.shortBreak}>Short Break</button>
<button className="light-red br3 pa3 grow b  bg-white"  onClick={this.props.longBreak} >Long Break</button>
</div>



<div id="2" class=" center pa2 br3   timerborder row ">
<h2 className="tc">
{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}</h2>

     </div>
     
     <div className="row">
<button className="light-red br3 pa3 grow bg-white b "  onClick={this.props.resumeTimer} > Resume</button>
<button className="light-red br3 pa3 grow  bg-white b"  onClick={this.props.stopTimer} >Stop</button>
</div>
<span className ="bordz"></span>
<div id="2" className="center  white ">
     <h1  className="">What is the Pomodoro Technique?</h1>
     <h3 className="ml2">The pomodoro technique is a worldwide known proven optimal method of studying developed by Francesco Cirillo in the late 1980s.</h3>
     <ul>
      <li>Find a place to study</li>
      <li>Put on the timer for 25 minutes</li>
      <li>After every pomodoro session take a 5 minute break</li>
      <li>Afer every fourth pomodoro session take a 15 minute break</li>
      
     </ul>
</div>



<footer id="3" class="pv4 ph3 tc bordz">
     <h1>About</h1>
  <a class="link near-black hover-silver dib mh3 tc" href="https://facebook.com" title="Facebook">
    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
    <span class="f6 db">Facebook</span>
  </a>
  
  <a class="link hover-silver near-black dib mh3 tc" href="https://instagram.com/mrmrs_" title="Instagram">
    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
    <span class="f6 db">Instagram</span>
  </a>
  <h3>You can find us on Instagram and Facebook for the latest updates about the website application</h3>
  
</footer>



     </div>
    


     );
 }
}


     export default TimerHeader;