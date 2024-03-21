import { Link } from "react-router-dom";
import img from "./imagenes/Logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
export const Navbar = () => {
  return (
    <>
    <nav className="nav-extended navStyle">
    <div className="nav-wrapper">
    <Link to="/">
          <img src={img} className="imgLogoNav"/>
    </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
         <li> 
            <Link to="/cart">
              <CartWidget></CartWidget>
            </Link>
         </li>        
      </ul>

    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab">
            <Link className="active" to="/category/REMERA">
            REMERAS
            </Link>
        </li>
            
        <li className="tab">
            <Link className="active" to="/category/MUSCULOSA">
            MUSCULOSAS
            </Link>
        </li>

      </ul>
    </div>
  </nav>


    </>
  )
}

