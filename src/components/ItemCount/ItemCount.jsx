import { useState } from "react";

export const ItemCount = ({stock, initial = 1}) => {

    const [count, setCount] = useState(initial);
    
    const increment = () => {
        if(count < stock){
            return setCount(count + 1);
        }
        setCount(count);
    }

    const decrement = () => {
        if(count === 1 ){
            return setCount(1);
        }
        setCount(count - 1);
    }


  return (
    <>
    <div className="countDiv">
        <div>
        <button className="waves-effect waves-light btn btnDecrement">-</button>
        </div>

        <strong>{count}</strong>

        <div>
        <button className="waves-effect waves-light btn btnIncrement">+</button>
        </div>

    </div>
            <div className="countCart">
            <button className="waves-effect waves-light btn">Agregar al carrito</button>
    
            </div>
    </>
  )
}

