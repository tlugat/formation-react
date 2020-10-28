import Article from '../Article/Article';

function List(props) {
  const { articles } = props;

  return (
    <div>
      {articles.map((art) => <Article article={art} key={art.title} />)}
    </div>
  );
}

export default List;
