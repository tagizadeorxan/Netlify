import React, { Component } from 'react';


class Timer extends Component {
    state = { time: 0 }

    componentDidMount() {
        setInterval(() => {
            let number = Number(this.state.time)+1;
            this.setState({ time: number });
        }, 1000)

    }

    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}

export default Timer;