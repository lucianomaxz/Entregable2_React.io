import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({id, name, precio, category, stock, url}) => {
  return (
    <div className="row">

      <div className="card cardItem">
        <div className="card-image imgCard">
          <img className="imgItem" src={url}/>
        </div>
        <div className="card-title nombreImgItemDetail">{name}</div>
        <div className="">Precio: ${precio}</div>
        <div className="">Categoria: {category}</div>

        {<ItemCount/>}
      </div>

  </div>
  )
}

