import React, { Component } from 'react';

class Counter extends Component {
    state = { number: 0, interval: "" };


    plus = (e) => {
        e.target.parentNode.children[3].classList.add("colorgreen");
        e.target.parentNode.children[3].classList.remove("colored");
        this.setState({interval:setInterval(() => {

            let number = Number(this.state.number) + 1;
            if (number <= 20) {
                this.setState({ number: number });
            }
        }, 100) })
    }

    plusOne = (e) => {
        
        let number = Number(this.state.number) + 1;
        if (number <= 20) {
            this.setState({ number: number });
        }
    }



    minus = (e) => {
        e.target.parentNode.children[3].classList.remove("colorgreen");
        e.target.parentNode.children[3].classList.add("colored");

        this.setState({interval:setInterval(() => {

            let number = Number(this.state.number) - 1;
            if (number >= 0) {
                this.setState({ number: number });
            }
        }, 100)})
    }

    minusOne = (e) => {
        let number = Number(this.state.number) - 1;
        if (number >= 0) {
            this.setState({ number: number });
        }
    }

    render() {
        return (
            <>
           
                <div className="counter">
                    <p>Counter</p>
                    <button onClick={this.plusOne} onMouseDown={this.plus} onMouseUp={(e) => {
                        e.target.parentNode.children[3].classList.remove("colorgreen");
                        clearInterval(this.state.interval)
                    }}>+</button>
                    <button onClick={this.minusOne} onMouseDown={this.minus} onMouseUp={(e) => {
                        e.target.parentNode.children[3].classList.remove("colored");
                        clearInterval(this.state.interval)
                    }}>-</button>
                    <p>count = {this.state.number}</p>
                </div>
            </>
        )
    }
}

export default Counter;