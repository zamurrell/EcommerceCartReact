import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-dark btn-sm"
        >
          +1
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-dark btn-sm m-2"
        >
          -1
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-secondary" : "badge-info";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "None" : this.props.counter.value;
  }
}

export default Counter;
