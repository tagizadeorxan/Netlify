import React from 'react';

class Dice extends React.Component {

   
    state = {
        number: 0
    }

    change = () => {
        let number = Math.floor(Math.random() * 6) + 1;
        this.setState({ number: number });
    }

    componentDidMount() {
        document.addEventListener("keypress", this.check, false);
    }

    check = (event) => {
        if (event.keyCode === 32) {
            this.change();
        }

    }


    render() {
        return (
            <>
                <div id="counter">
                    <span>{this.state.number}</span>
                    <button onClick={this.change}>change number</button>
                </div>
            </>
        )
    }
}

export default Dice;