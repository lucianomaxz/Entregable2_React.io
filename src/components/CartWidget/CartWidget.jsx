import { useContext } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {

    const { totalItems } = useContext(CartContext);

  return (
    <>
      <RiShoppingCart2Line className="cartWidget"/>
      <strong className="numberCartWidget">{totalItems}</strong>
    </>

  )
}

