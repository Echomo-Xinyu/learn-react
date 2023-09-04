import React from "react";

export default class Count extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <span>Count: {count}</span>
        <button
          type="button"
          onClick={() => {
            this.setCount({
                count : this.state.count + 1
            });
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            this.setCount({
                count : this.state.count - 1
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
