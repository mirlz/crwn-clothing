import Categories from '../../components/categories/categories.component';
import cats from '../../data/categories.json';

const Home = () => {
  return (
    <Categories categories={cats} />
  );
}

export default Home;
