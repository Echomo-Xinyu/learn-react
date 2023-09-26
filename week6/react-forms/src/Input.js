export default function Input(props) {
  return (
    <>
    {/* above is a good example of empty div */}
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
      // all values below are customizable
        type="text"
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={(event) => {
          props.onInputChange(event);
      }}/>
    </>
  )
}