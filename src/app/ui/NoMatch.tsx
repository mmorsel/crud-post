import { Link } from "react-router-dom";

const NoMatch: React.FC = () => {
  return (
    <div>
      <h2>Страницы не существует</h2>
      <p>
        <Link to="/">Все посты</Link>
      </p>
    </div>
  );
};

export default NoMatch;
