import React from "react";
import lifter from "../images/lifter.gif"


export default class Calc extends React.Component {
  state = {
    showMessage: false,
  };
  constructor(props) {
    super(props);
    this.niceFunc5 = this.niceFunc5.bind(this);
    this.niceFunc6 = this.niceFunc6.bind(this);
    this.niceFunc7 = this.niceFunc7.bind(this);
    this.niceFunc8 = this.niceFunc8.bind(this);
    this.niceFunc9 = this.niceFunc9.bind(this);

  }

  niceFunc5() {
    this.setState({ showMessage: true });
    var maxWeight = +document.getElementById("max-weight").value;
    this.setState({ totalWeight: maxWeight * .5 })
  }
  niceFunc6() {
    this.setState({ showMessage: true });
    var maxWeight = +document.getElementById("max-weight").value;
    this.setState({ totalWeight: maxWeight * .6 })
  }

  niceFunc7() {
    this.setState({ showMessage: true });
    var maxWeight = +document.getElementById("max-weight").value;
    this.setState({ totalWeight: maxWeight * .7 })
  }
  niceFunc8() {
    this.setState({ showMessage: true });
    var maxWeight = +document.getElementById("max-weight").value;
    this.setState({ totalWeight: maxWeight * .8 })
  }
  niceFunc9() {
    this.setState({ showMessage: true });
    var maxWeight = +document.getElementById("max-weight").value;
    this.setState({ totalWeight: maxWeight * .9 })
  }

  render() {
    return (
      
        <div className="container">
          
          <img src={lifter} className="lifter"></img>
          
        <form>
         
          
          <p className="max-weight-text">
            Your max weight
            </p>
            <input className="max-weight-box" type="number" id="max-weight"></input>
          
          <p className="lift-weight-text" >
            Percentage of max you want to lift
            </p>
            <div className="button-holder">
            <button type ="button"className="50-per" onClick={this.niceFunc5} >50%</button>
            <button type ="button" className="60-per" onClick={this.niceFunc6}>60%</button>
            <button type ="button" className="70-per"onClick={this.niceFunc7}>70%</button>
            <button type ="button" className="80-per"onClick={this.niceFunc8}>80%</button>
            <button type ="button" className="90-per"onClick={this.niceFunc9}>90%</button>
        
        </div>
         
        </form>
      
        
      <h1 className="lift-message">{this.state.showMessage && <p>You should lift {this.state.totalWeight}lbs</p>}</h1>
        </div>
     
    );
  }
}
