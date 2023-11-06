// refer to .env file
// restart needed
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export function fetchPost() {
  return fetch(
    `${baseUrl}/posts?_expand=user`
  ).then((response) => {
    return response.json();
  });
}

export function fetchPostById(id) {
  return fetch(
    `${baseUrl}/posts/${id}?_expand=user&_embed=comments`
  ).then((response) => {
    return response.json();
  });
}

export function saveComment(data) {
  // POST /comments
  return fetch(`${baseUrl}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    }
  }).then((response) => {
    return response.json();
  })
}

export function deleteComment(commentId) {
  return fetch(`${baseUrl}/comments/${commentId}`, {
    method: "DELETE",
  });
}
