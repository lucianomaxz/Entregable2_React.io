import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { LuLoader2 } from "react-icons/lu";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const { category } = useParams();


  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  

  useEffect( () => {
    setisLoading(true);
    getProducts()
      .then( resp => {
        // Verifica si existe una categoria como paremetro
        if(category) {
          const productsFilter = resp.filter( product => product.category === category);
          setproducts(productsFilter);
        }else{
          //si no existe una categoria como parametro seteamos todos los productos en el state products
          setproducts(resp);
        }
          setisLoading(false);
      })

  }, [category])
  

    
  return (
    <>
    { isLoading ? <LuLoader2 className="loader" /> : <ItemList products={products} />}
    </>
  )
}

