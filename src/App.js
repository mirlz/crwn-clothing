import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
