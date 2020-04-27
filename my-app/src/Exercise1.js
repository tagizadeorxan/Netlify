import React, { Component } from 'react';

class Exercise1 extends Component {

    state = { result: 0 ,array:[],count:0};

    calculate = (e) => {
        console.log(e.target.value);
        let result = this.state.result + Number(e.target.value);
        this.state.array.push(result);
        this.setState({ result});
        console.log(this.state.array);
      

    }

    render() {
        let { result,array,count } = this.state;

        return (
            <div>
                <h1>ex1</h1>
                <h2>Curren result: {result}</h2>
                <div className="buttons">
                    <button value="-5" onClick={this.calculate}>-5</button>
                    <button value="-2" onClick={this.calculate}>-2</button>
                    <button value="-1" onClick={this.calculate}>-1</button>
                    <button value="1" onClick={this.calculate}>+1</button>
                    <button value="2" onClick={this.calculate}>+2</button>
                    <button value="5" onClick={this.calculate}>+5</button>
                </div>
                <div className="history">
                <p>History of results</p>
                      {array.map(number=> <p key={count++}>{number}</p>)} 
                </div>

            </div>

        )
    }
}

export default Exercise1;