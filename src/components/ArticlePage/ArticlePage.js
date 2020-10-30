import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  createArticle,
  getArticle,
  updateArticle
} from '../../services/articles/articles';
import useCategories from '../../hooks/useCategories/useCategories';

import Title from '../Title/Title';

function ArticlePage(props) {
  const id = props.match.params.id;
  // const { match: { params: { id } } } = props;

  const categories = useCategories();
  const [article, setArticle] = useState({
    category: '',
    title: ''
  });
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getArticle(id).then(data => setArticle(data));
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      updateArticle(article)
        .then(() => history.push('/'));
    } else {
      createArticle(article)
        .then(() => history.push('/'));
    }
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
        <div>
          <label>
            Titre:
            <input
              name="title"
              type="text"
              value={article.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              name="category"
              value={article.category}
              onChange={handleChange}
            >
              <option value=""></option>
              {categories.map(category => <option
                value={category.id}
                key={category.id}
              >{category.title}</option>)}
            </select>
          </label>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}

export default ArticlePage;
