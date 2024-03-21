import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'

export const ItemDetail = ({id, name, precio, category, stock, url}) => {

  const { addItem} = useContext(CartContext);

  const onAdd = ( quantity ) => {
    
    const item = {
      id,
      precio,
      name,
      url,
      category,

    }

    addItem(item,quantity);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se ha agregado el producto al carrito :)",
      showConfirmButton: false,
      timer: 1500
    });

  }


  return (
    <div className="d-flex flex-wrap justify-content-center">

      <div className="card cardItem">
        <div className="card-image imgCard">
          <img className="imgItem" src={url}/>
        </div>
        <div className="card-title nombreImgItemDetail">{name}</div>
        <div className="">Precio: ${precio}</div>
        <div className="">Categoria: {category}</div>
        <div className="">Stock disponible: {stock}</div>

        {<ItemCount stock = {stock} onAdd={onAdd}/>}
      </div>

  </div>
  )
}

