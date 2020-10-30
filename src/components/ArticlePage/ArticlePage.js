import { useState } from 'react';

import { createArticle } from '../../services/articles/articles';

import Title from '../Title/Title';

function ArticlePage() {
  const [article, setArticle] = useState({
    title: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    createArticle(article);
  }

  function handleChange(event) {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <Title title="Add new article" />
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            name="title"
            type="text"
            value={article.title}
            onChange={handleChange}
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default ArticlePage;
