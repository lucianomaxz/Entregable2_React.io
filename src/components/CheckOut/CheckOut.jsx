import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import Swal from "sweetalert2"

export const CheckOut = () => {

    const {cart,precioTotal, clearCart} = useContext(CartContext)


    const [formCheckout, setFormCheckout] = useState({
        name:"",
        phone:0,
        email:"",
    })


    const [orderId, setOrderId] = useState(null);


    const handleName = (e) => {
        setFormCheckout({
            ...formCheckout,
            name: e.target.value
        })
    }

    const handleTelefono = (e) => {
        setFormCheckout({
            ...formCheckout,
            telefono: e.target.value
        })
    }


    const handleEmail = (e) => {
        setFormCheckout({
            ...formCheckout,
            email: e.target.value
        })
    }


    const handleSubmit = async (e) => {
         e.preventDefault()
         const newOrder = {
            buyer: formCheckout,
            items: cart,
            precioTotal,
            date: serverTimestamp()
         }

         const order = await addDoc( collection( db, "orders"), newOrder );

         setFormCheckout({
            name:"",
            telefono:0,
            email: "",
         })


         clearCart();

         setOrderId(order.id);
         Swal.fire({
            title: "Good job!",
            text: "Compra realizada",
            icon: "success"
          });

    };

    if(orderId) {
        return <h3>Su id de compra es {orderId}</h3>
    }


    return(
        <div className="container d-flex justify-content-center m-5">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" className="form-control" value={formCheckout.name} onChange={handleName}/>
                <label htmlFor="">Telefono</label>
                <input type="number" className="form-control" value={formCheckout.telefono} onChange={handleTelefono}/>
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" value={formCheckout.email} onChange={handleEmail}/>
                <input type="submit" className="mt-3 btn btn-success" value="Terminar la compra"/>
            </form>
        </div>
    )

}