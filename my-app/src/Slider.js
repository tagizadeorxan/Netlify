import React, { Component } from 'react';


class Slider extends Component {

    state = { image: 1, active:""};
    
    componentDidMount() {
        document.addEventListener("keydown", this.check, false);
    }

    check = (event) => {
        event.stopImmediatePropagation();
        if (event.keyCode === 39) {
            this.next();
        }
        else if (event.keyCode === 37) {
            this.prev();
        }

    }

 

    next = () => {
        let number = Number(this.state.image) + 1;
        if (number <= 5) {
            this.setState({ image: number,active:number });
            
        }

    }

    prev = () => {
        let number = Number(this.state.image) - 1;
        if (number > 0) {
            this.setState({ image: number,active:number });
        }

    }


    render() {
        return (
            <>
              
                <div>
                    <img className="slide" src={require(`./imagesSlider/${this.state.image}.jpg`)} alt="slide" />
                    <div>
                        <button onClick={this.next}>next → </button>
                        <button className={this.state.active === 1 ? "active" : null} onClick={()=>this.setState({image:1, active:1})}>1</button>
                        <button className={this.state.active === 2 ? "active" : null} onClick={()=>this.setState({image:2, active:2})}>2</button>
                        <button className={this.state.active === 3 ? "active" : null} onClick={()=>this.setState({image:3, active:3})}>3</button>
                        <button className={this.state.active === 4 ? "active" : null} onClick={()=>this.setState({image:4, active:4})}>4</button>
                        <button className={this.state.active === 5 ? "active" : null} onClick={()=>this.setState({image:5, active:5})}>5</button>
                        <button onClick={this.prev}>prev ←</button>
                    </div>
                </div>

            </>
        )
    }
}

export default Slider;