import React, { Component } from "react";
import { formatPrice } from "../helpers";
export default class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const unavailable = status === "unavailable";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}

          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={unavailable} onClick={this.handleClick}>
          {unavailable === true ? "Sold Out" : "Add to Cart"}
        </button>
      </li>
    );
  }
}
