import {useRef, useState} from "react";
import AutoCompleteInput from "./AutoCompleteInput";

function fetchRepos(q) {
  return fetch(`https://api.github.com/search/repositories?q=${q}`).then((response) => response.json()).then((json => {
    const repoName = json.items.map((item) => item.full_name);
    return repoName;
  }));
}

export default function App() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const id = "repos";
  // useRef is similar to useState to preserve the value
  let timeoutRef = useRef(undefined);
  // timeoutRef.current -> undefined

  return (
    <div>
      <AutoCompleteInput
        id={id}
        value={search}
        selfOnChange={(event) => {
          const value = event.target.value;
          setSearch(value);
          if (timeoutRef.current !== undefined) {
            clearTimeout(timeoutRef.current);
          }
          if (value) {
            timeoutRef.current = setTimeout(() => {
              fetchRepos(value).then((repoNames) => {
                setOptions(repoNames);
              });
            }, 1000);
            
          } else {
            setOptions([]);
          }
        }}
        options={options}
      />
    </div>
  );
}
