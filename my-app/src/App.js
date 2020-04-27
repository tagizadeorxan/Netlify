import React from 'react';
import './index';
import Counter from './Counter';
import Dice from './Dice';
import Navigation from './Navigation'
import Slider from './Slider';
import Users from './Pages/Users';
import MultiplePages from './MultiplePages';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';

class App extends React.Component {
  state = { active: "" };

  finder = (e) => {
    this.setState({ active: e.target.innerText });
  }
  render() {

    let data = {
      Counter: <Counter />,
      Dice: <Dice />,
      Navigation: <Navigation />,
      Slider: <Slider />,
      Users: <Users/>,
      Pages: <MultiplePages/>,
      ex1: <Exercise1/>,
      ex2: <Exercise2/>,
      ex3: <Exercise3/>
    }

    return (
      <>
        <div onClick={this.finder} className="exercises">
          <div className="exercise">Counter</div>
          <div className="exercise">Dice</div>
          <div className="exercise">Navigation</div>
          <div className="exercise">Slider</div>
          <div className="exercise">Users</div>
          <div className="exercise">Pages</div>
          <div className="exercise">ex1</div>
          <div className="exercise">ex2</div>
          <div className="exercise">ex3</div>
        </div>

        <div >
          {data[this.state.active]}
        </div>

      </>
    )
  }
}

export default App;