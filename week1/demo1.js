document.getElementById("member-button").addEventListener("click", function () {
  document.getElementById("results").innerHTML = "Page is loading...";

  const promise = fetch("https://api.github.com/orgs/jquery/members");

  promise
    .then((response) => {
      return response.json();
    })
    .then((members) => {
      let html = '';

      members.forEach((member) => {
        html = html + `<img src="${member.avatar_url}" width="150"/>`;
      });

      document.getElementById("results").innerHTML = DOMPurify.sanitize(html); // prevent XSS attack from external sites
    });
});

document.getElementById("repository-button").addEventListener("click", function () {
  document.getElementById("results").innerHTML = "Page is loading...";

  const promise = fetch("https://api.github.com/orgs/jquery/repos");

  promise
    .then((response) => {
      return response.json();
    })
    .then((repos) => {
      let html = '<ul>';

      repos.forEach((repo) => {

        html = html + `<li>${repo.name}: ${repo.description}</li>`;
      });

      html = html + "</ul>";

      document.getElementById("results").innerHTML = DOMPurify.sanitize(html);
    });
});
