import React, { Component } from "react";

type StateType = {
  count: number;
};

type CounterPropsType = {
  message: string;
};

// export class Counter extends Component<{}, StateType> {
export class Counter extends Component<CounterPropsType, StateType> {
  state = {
    count: 0,
  };

  handleClick = () =>
    this.setState(prevState => ({ count: prevState.count + 1 }));

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>increment</button>
        <h1>
          {this.props.message}
          {this.state.count}
        </h1>
      </div>
    );
  }
}

export default Counter;
