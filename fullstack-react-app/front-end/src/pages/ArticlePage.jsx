import { useParams } from 'react-router-dom';
import articles from '../article-content.js';

export default function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((a) => a.name === name);

  return (
    <>
      <h3>{article.title}</h3>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
}
