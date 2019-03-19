import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    console.log(this.myInput);
    this.props.history.push("/store/home");
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
        />
        <button>Visit Store =></button>
      </form>
    );
  }
}
export default StorePicker;
