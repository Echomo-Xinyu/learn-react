export default function Checkboxes(props) {
  return (
    <>
      {props.options.map((option) => {
        return (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={option}
              checked={props.selected.includes(option) ? true : false}
              onChange={(event) => {
                const isChecked = event.target.checked;

                if (isChecked) {
                  const selected = [...props.selected, option];
                  props.onChange(selected);
                } else {
                  const selected = props.selected.filter((selectedOption) => {
                    return selectedOption !== option;
                  });

                  props.onChange(selected);
                }
              }}
            />
            <label className="form-check-label" htmlFor={option}>
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
}
