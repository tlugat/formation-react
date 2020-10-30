import { BrowserRouter, Route } from 'react-router-dom';

import ArticlesPage from '../ArticlesPage/ArticlesPage';
import ArticlePage from '../ArticlePage/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ArticlesPage}/>
      <Route exact path="/article" component={ArticlePage}/>
      <Route exact path="/article/:id" component={ArticlePage}/>
    </BrowserRouter>
  );
}

export default App;
