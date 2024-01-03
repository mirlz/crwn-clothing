import Categories from './components/categories/categories.component';
import cats from './data/categories.json';

const App = () => {
  return (
    <Categories categories={cats} />
  );
}

export default App;
