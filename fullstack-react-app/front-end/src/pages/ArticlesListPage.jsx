import ArticlesList from '../ArticlesList.jsx';
import articles from '../article-content.js';

export default function ArticlesListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
}
