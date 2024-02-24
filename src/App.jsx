import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/NavBar/Navbar"
import { Cart } from "./components/Cart/Cart"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>ERROR 404</h1>} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

