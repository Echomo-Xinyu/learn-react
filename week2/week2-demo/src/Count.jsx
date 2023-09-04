import { useState } from "react";

export default function Count() {
  // count variable is initailized to be 0
  // when there is a change in count value, the elements will get re-rednered
  // the count value must be changed via setCount
  // [] is array destructuring, assign value by index
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Count: {count}</span>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}>
          +
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}>
          -
      </button>
    </div>
  );
}
