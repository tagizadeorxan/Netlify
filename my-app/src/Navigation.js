import React from 'react';

class Navigation extends React.Component {

    state = { text: "", active: "text" };

    reset = () => {
        this.setState({ text: "", active: "text" })
    }

    account = () => {
        this.setState({ text: 'Счета' });
        this.setState({ active: 'account' });
    }

    deposit = () => {
        this.setState({ text: 'Вклады' });
        this.setState({ active: 'deposit' });
    }


    invest = () => {
        this.setState({ text: 'Инвестиции' });
        this.setState({ active: 'invest' });
    }

    render() {
        return (
            <>
                <div className="navigation">
                    <button className={this.state.active === 'account' ? "active" : null} onClick={this.account}>Счета</button>
                    <button className={this.state.active === 'deposit' ? "active" : null} onClick={this.deposit}>Вклады</button>
                    <button className={this.state.active === 'invest' ? "active" : null} onClick={this.invest}>Инвестиции</button>
                    <p>{this.state.text}</p>
                </div>
                <button className="button" onClick={this.reset}>reset</button>

            </>
        )
    }
}

export default Navigation;