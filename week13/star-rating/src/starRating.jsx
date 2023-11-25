export default function StarRating(props) {
  const stars = [];
  const total = props.total || 5;

  // const emptyColor = props.emptyColor || '#eee'
  // const filledColor = props.filledColor || 'yellow'

  for (let i = 1; i <= total; i++) {
    stars.push(
      <button
        type="button"
        className="btn"
        data-testid="star-button"
        key={i}
        onClick={() => {
          props.onStarClick(i);
        }}
      >
        <span data-testid={props.rating >= i ? "filled-star" : "empty-star"}>
        {props.children(props.rating >= i)}
        </span>

      </button>
    );
  }
  return (
    <>
      {/* children is keyword that cannot be changed to another name
      {props.children} */}
      {stars}
    </>
  );
}
