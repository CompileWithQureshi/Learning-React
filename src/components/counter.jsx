import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handelInceremnet = (params) => {
    console.log(params);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <input
          type="button"
          value="Incerement"
          className="btn btn-secondary btn-sm"
          onClick={() => this.handelInceremnet()}
        />
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li> //Here we are using map object method to add li tags in this ul by render method in react.
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
