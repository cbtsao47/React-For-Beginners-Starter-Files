import React from "react";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import sampleFishes from "./sample-fishes";
import Fish from "./components/Fish";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      orders: {}
    };
  }
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = order => {
    // 1. make a shallow copy of state
    const orders = { ...this.state.orders };
    // 2. Either add to order, or update the number in the order
    orders[order] = orders[order] + 1 || 1;
    // 3. call setState to update the state
    this.setState({ orders });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
