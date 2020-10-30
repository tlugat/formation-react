export function getArticles() {
  return fetch('http://localhost:3000/articles')
    .then(response => response.json());
}

export function getArticle(id) {
  return fetch('http://localhost:3000/articles/' + id)
    .then(response => response.json());
}

export function createArticle(article) {
  return fetch(
    'http://localhost:3000/articles',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    .then(response => response.json());
}
