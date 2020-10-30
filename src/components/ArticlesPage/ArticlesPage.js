import { useState } from 'react';
import { Link } from 'react-router-dom';

import useArticles from '../../hooks/useArticles/useArticles';
import useCategories from '../../hooks/useCategories/useCategories';

import Cart from '../Cart/Cart';
import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Resize from '../Resize/Resize';
import Title from '../Title/Title';

function ArticlesPage() {
  const articles = useArticles();
  const categories = useCategories();

  const [filters, setFilters] = useState({
    title: '',
    category: '',
    published: ''
  });
  function handleFilterChange(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  }

  const filteredArticles = articles
    .filter(art => art.title.includes(filters.title))
    .filter(art => filters.category === '' ||
      art.category === Number(filters.category))
    .filter(art => filters.published === '' ||
      (art.published === true && filters.published === 'published') ||
      (art.published === false && filters.published === 'draft'));

  return (
    <div>
      <Title title="Homepage" />
      <Link to="/article">Add new article</Link>
      <Resize/>

      <Container>
        <Filters
          categories={categories}
          category={filters.category}
          published={filters.published}
          title={filters.title}
          handleFilterChange={handleFilterChange}
        />
        <List
          articles={filteredArticles}
          categories={categories}
        />
      </Container>
      
      <Container>
        <Cart/>
      </Container>
    </div>
  );
}

export default ArticlesPage;
