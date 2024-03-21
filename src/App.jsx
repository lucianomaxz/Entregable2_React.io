import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/NavBar/Navbar"
import { Cart } from "./components/Cart/Cart"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from "./context/CartContext"
import { CartShow } from "./components/CartShow/CartShow"
import { CheckOut } from "./components/CheckOut/CheckOut"

export const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cartshow" element={<CartShow/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

    </>
  )
}

