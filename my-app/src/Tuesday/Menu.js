import React, { Component } from 'react';

class Menu extends Component {
    state = { isVisible: false, left: 0, top: 0 }

    componentDidMount() {
        document.addEventListener("click", this.isVisible);
    }

    isVisible = (e) => {
        this.setState({ left: e.clientX, top: e.clientY, isVisible:!this.state.isVisible })
    }


    render() {
        let {left,top,isVisible} = this.state;
        return (
            <>
                <div style={{ position: "absolute", left,top }} className={isVisible === true ? "visible" : "unvisible"}>
                    <ul>
                Menu
             <li>1</li>
             <li>2</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Menu;