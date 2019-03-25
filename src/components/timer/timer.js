import React, { Component } from 'react'
import EasyTimer from 'easytimer.js'

class Timer extends Component {
    constructor(){
        super();
        this.timer = new EasyTimer();    
        this.timer.start();
        this.state = {time: ''};
        this.timer.addEventListener('secondsUpdated', (e) => {
            this.setState( () => {
                return  {
                    time: this.timer.getTimeValues().toString()
                }
            }
                   
        )            
        });
    }

    render = () => {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default Timer;