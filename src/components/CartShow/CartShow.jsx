import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const CartShow = () => {

        const { cart, clearCart, removeItem, precioTotal } = useContext( CartContext);

        
        
          return (
            <>
            <div className="d-flex flex-wrap justify-content-center">
                
              {cart.map((item) => (
                    <div className="row">
                        <div className="card">
                            <div key={item.id} className="card cardItem">

                                <div className="card-image imgCard">
                                <img className="imgItem" src={item.url}/>
                                </div>
                                <div key={item.id} className="card-title nombreImgItemDetail">{item.name}</div>
                                <div key={item.id} className="">Precio Unitario: ${item.precio}</div>    
                                <div key={item.id} className="">Cantidad: {item.quantity}</div>  
                                <div key={item.id} className="">SubTotal: ${item.subTotal}</div>              
                                <button className="btn btn-danger" onClick={() => removeItem(item.id,item.name)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
              ))}


                

            </div>
            { precioTotal > 0 ? <>
            
              <p className="btnTotal m-5">TOTAL: ${precioTotal}</p>
              <button className="btn btn-outline-success m-5" onClick={clearCart}>Vaciar Carrito</button>
              <Link to="/checkout">
                <button className="btn btn-outline-success m-5" >Comprar</button>
              </Link>

            </>: <p className="btnTotal m-5">CARRITO VACIO</p>}
            
            { }


            
            </>
        
          )
        }
        