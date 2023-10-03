// this is a duplicate version as App.js but written in class way

import { Component } from "react";

function fetchRepos(search) {
  return fetch(`https://api.github.com/search/repositories?q=${search}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.items.map((repo) => {
        return repo.full_name;
      });
    });
}

export default class App extends Component {
  #timeoutId = undefined;

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      options: []
    };
  }

  render() {
    const list = "repo-dropdown";

    return (
      <>
        <input
          type="text"
          list={list}
          value={this.state.search}
          onChange={(event) => {
            const value = event.target.value;

            this.setState({
              search: value
            });

            if (this.#timeoutId !== undefined) {
              clearTimeout(this.#timeoutId);
            }

            if (value) {
              this.#timeoutId = setTimeout(() => {
                fetchRepos(value).then((repoNames) => {
                  this.setState({
                    options: repoNames
                  });
                });
              }, 1000);
            } else {
              this.setState({
                options: []
              });
            }
          }}
        />

        <datalist id={list}>
          {this.state.options.map((option) => {
            return <option key={option} value={option} />;
          })}
        </datalist>
      </>
    );
  }
}
