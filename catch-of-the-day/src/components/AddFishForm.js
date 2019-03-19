import React from "react";

export default class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    console.log(fish);
    this.props.addFish(fish);
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} paceholder="Desc" />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="Image"
        />
        <button>+Add Fish</button>
      </form>
    );
  }
}
