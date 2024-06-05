import { Routes, Route } from "react-router-dom"
import { MainPage } from "../pages/MainPage/MainPage"
import { Header } from "../widgets/Header"
import { Cart } from "../pages/Cart/Cart"
import { FavoritesPage } from "../pages/Favorites/Favorite"

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={< MainPage />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/favorites" element={< FavoritesPage />} />
        </Routes>
    </>
  )
}

export default App
