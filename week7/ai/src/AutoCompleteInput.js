export default function AutoCompleteInput(props) {
  return (
    <>
       <input type="text" list={props.id} value={props.value} onChange={(event) => {
        props.selfOnChange(event);
      }}/>
      <datalist id={props.id}>
        {props.options.map((option) => {
          return <option key={option} value={option}/>
        })}
      </datalist>

    </>
  )
}