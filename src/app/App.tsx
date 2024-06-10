import { Routes, Route, useLocation } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { Header } from '../widgets/Header';
import { Cart } from '../pages/Cart/Cart';
import { FavoritesPage } from '../pages/Favorites/Favorite';
import { Particles } from './Particles';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

function App() {
  const location = useLocation();
  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isLoginOrRegister && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <Particles />
    </>
  );
}

export default App;
