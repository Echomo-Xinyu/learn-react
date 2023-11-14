export default function StarRating(props) {
  const stars = [];

  // const emptyColor = props.emptyColor || '#eee'
  // const filledColor = props.filledColor || 'yellow'

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <button
        type="button"
        className="btn"
        key={i}
        onClick={() => {
          props.onStarClick(i);
        }}
      >
        {props.renderStar(props.rating >= i)}
      </button>
    );
  }
  return (
    <>
      {/* children is keyword that cannot be changed to another name */}
      {props.children}
      {stars}
    </>
  );
}
