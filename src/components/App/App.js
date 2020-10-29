import { useState } from 'react';

import useArticles from '../../hooks/useArticles/useArticles';
import useCategories from '../../hooks/useCategories/useCategories';

import Filters from '../Filters/Filters';
import List from '../List/List';
import CartItem from '../CartItem/CartItem';
import Resize from '../Resize/Resize';
import Title from '../Title/Title';

function App() {
  const articles = useArticles();
  const categories = useCategories();

  const pdt1 = {
    price: 12,
    name: 'foo'
  };
  const pdt2 = {
    price: 42,
    name: 'bar'
  };

  const [title, setTitle] = useState('Homepage');
  function handleClick() {
    setTitle('Page de liste');
  }

  const [titleFilter, setTitleFilter] = useState('');
  function handleChange(event) {
    setTitleFilter(event.target.value);
  }

  const filteredArticles = articles
    .filter(art => art.title.includes(titleFilter));

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>change title</button>
      <Resize/>
      <Filters
        title={titleFilter}
        handleChange={handleChange}
      />
      <List
        articles={filteredArticles}
        categories={categories}
      />
      <CartItem product={pdt1} />
      <CartItem product={pdt2} />
    </div>
  );
}

export default App;
