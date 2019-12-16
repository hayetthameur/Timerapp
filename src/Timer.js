import React, { Component } from 'react';



const convertTime = (totalsecond) => {
    const second = totalsecond % 60;
    const minute = Math.floor((totalsecond / 60) % 60);
    const hours = Math.floor(totalsecond / 3600);

    return {
        second,
        hours,
        minute
    }
}

const formatTime = (totalsecond)=> {
    const time = convertTime(totalsecond)
    return (
        String(time.hours).padStart(2, "0") + ':' +
        String(time.minute).padStart(2, "0") + ':' +
        String(time.second).padStart(2, "0") 
    );
}
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            second: 0,
            pause: false
 
        }
        this.handleStop = this.handleStop.bind(this)  
        this.handleStart = this.handleStart.bind(this); 
          
       
    }
    pauseTime = () => {
        clearInterval(this.interval);
        this.setState({ pause: false });
    };
    handleStop = () => {
        clearInterval(this.interval)
        this.setState({ second: 0 });
   
    }
    handleStart = () => {
        this.setState({pause:true});
      
            this.interval = setInterval(() => {
            this.setState({
                second: this.state.second + 1
            });
        }, 1000);
    
    


    }
        

    

    render() {
        return (<div className="timer">
                <div className="rectangle">
            <h1>{formatTime(this.state.second)}</h1>
            <div className="title"><h6>Hour</h6>    <h6>Minute</h6>   <h6>Second</h6></div>
            </div>
            <div className="timer-controls">
                <button className="btn btn-success" onClick={this.state.pause ? this.pauseTime : this.handleStart}>StartTimer</button>
                <button className="btn btn-danger" onClick={this.handleStop}>ResetTimer</button>

            </div>

        </div>);
    }
}




      

  

 
export default Timer;
