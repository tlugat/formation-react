import { useState } from 'react';
import classnames from 'classnames';

import './Article.css';

function Article(props) {
  const { article, categories, foo } = props;

  const { category: categoryId, published, title } = article;
  // const categoryId = article.category;
  // const published = article.published;
  // const title = article.title;

  const category = categories.find(cat => cat.id === categoryId);

  const [ selected, setSelected ] = useState(false);
  function handleClick() {
    setSelected(prevState => !prevState);
  }

  return (
    <div
      className={classnames('Article', { 'Article--selected': selected })}
      onClick={handleClick}
    >
      <div className="Article__title">{title}</div>
      <div>{category ? category.title : categoryId}</div>
      <div>{published ? 'Published' : 'Draft'}</div>
      <div>{foo}</div>
    </div>
  );
}

Article.defaultProps = {
  article: {},
  foo: 'foo'
};

export default Article;
