import { useState } from 'react';
import classnames from 'classnames';

import './Article.css';

function Article(props) {
  const { article, foo } = props;
  const { category, published, title } = article;
  let [ selected, setSelected ] = useState(false);

  function handleClick() {
    setSelected(prevState => !prevState);
  }

  return (
    <div
      className={classnames('Article', { 'Article--selected': selected })}
      onClick={handleClick}
    >
      <div className="Article__title">{title}</div>
      <div>{category}</div>
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
