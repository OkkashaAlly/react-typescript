import React, { useReducer } from "react";

// TYPE
type StateType = {
  count: number;
};


type UpdateType = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

type ResetType = {
  type: "RESET";
};

type ActionType = UpdateType | ResetType;

// STATE
const initialState = { count: 0 };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT":
      return { count: state.count - action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

// COMPONENT
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={_ => dispatch({ type: "INCREMENT", payload: 10 })}>
        increse 10
      </button>
      <button onClick={_ => dispatch({ type: "DECREMENT", payload: 10 })}>
        decrese 10
      </button>
      <button onClick={_ => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default Counter;
