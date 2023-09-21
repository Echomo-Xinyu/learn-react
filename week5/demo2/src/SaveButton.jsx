import { useState } from "react";

function timeout(ms) {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, ms)
  });

  return promise;
}

export default function SaveButton(props) {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        setIsPending(true);

        Promise.all([
          props.save(),
          timeout(2000)
        ]).then(() => {
          setIsPending(false);
        });
      }}>
      {isPending ? "Saving..." : "Saved"}
    </button>
  )
}
