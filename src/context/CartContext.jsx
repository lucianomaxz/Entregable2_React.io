import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext(null);


export const CartContextProvider = ( {children}) => {

    const [cart, setCart] = useState([]);

    const [totalItems, setTotalItems] = useState(0);

    const [precioTotal, setPrecioTotal] = useState(0);




    const addItem = (item, quantity) => {
        const cartCopy = [...cart];

        const index = cartCopy.findIndex( product => product.id === item.id);

        if(index != -1) {
            cartCopy[index].quantity = cartCopy[index].quantity + quantity;
            cartCopy[index].subTotal = cartCopy[index].precio * cartCopy[index].quantity;
            setCart(cartCopy);
        }else{
            const newItem = {
                ...item,
                quantity,
                subTotal: item.precio * quantity,
            }

            setCart([...cart, newItem]);
        }
    };


    const removeItem = (id,name) => {
        Swal.fire({
            title: "ESTAS SEGURO?",
            text: "Es un buen producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
          }).then((result) => {
            if (result.isConfirmed) {
                    Swal.fire({
                        title: "Se ha eliminado el producto del carrito :(",
                        text: "Producto: " + name,
                        icon: "success"
                    });
                    const cartFilter = cart.filter( item => item.id !== id);
                    setCart(cartFilter);
            }
          });


    };
 

    const clearCart = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se ha vaciado el carrito",
            showConfirmButton: false,
            timer: 1500
          });
        setCart([]);
    };

    const handleTotalItems = () =>{
        const newTotalItems = cart.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalItems(newTotalItems);
    }

    const handlePrecioTotal = () =>{
        const newPrecioTotal = cart.reduce( (acum, item) => acum + item.precio * item.quantity, 0);
        
        setPrecioTotal(newPrecioTotal.toFixed(2));
    }

    useEffect ( () => {
        handleTotalItems();
        handlePrecioTotal();
    },[cart])
    

    const objectValues = {
        cart,
        precioTotal,
        totalItems,
        addItem,
        removeItem,
        clearCart,
    };


    return <CartContext.Provider value={objectValues}> {children} </CartContext.Provider>



}