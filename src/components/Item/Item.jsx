import { Link } from "react-router-dom"

export const Item = ({ id, name, url, precio}) => {
  return (
    
    <div className="row">

      <div className="card">
        <div className="card-image imgCard">
          <img className="imgItem" src={url}/>
        </div>
        <div className="card-title">{name}</div>

        <div className="card-content">
          <p>{precio}</p>
        </div>
        <div className="card-action">
          <Link to={`/item/${id}`}>
          <button className="waves-effect waves-light btn">Detalles</button>
          </Link>
        </div>
      </div>

  </div>

  )
}

