import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { name: "Alaa", title: "Developer" };
  }

  handleChange = () => {
    this.setState({name: 'welcome'})
  };

  render() {
    return (
      <div>
        <h1>Class Component {this.state.name}</h1>
        <button className="btn btn-primary" onClick={this.handleChange}>
          change
        </button>
      </div>
    );
  }
}

