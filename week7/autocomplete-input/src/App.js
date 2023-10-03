import {useRef, useState} from "react";

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
      <input type="text" list={id} value={search} onChange={(event) => {
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
        
      }}/>
      <datalist id={id}>
        {options.map((option) => {
          return <option key={option} value={option}/>
        })}
      </datalist>

    </div>
  );
}
