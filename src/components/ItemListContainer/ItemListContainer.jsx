import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { LuLoader2 } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";



export const ItemListContainer = () => {

  const { category } = useParams();


  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  
  const getProductsDB = ( category ) => {
      const myProducts = category ? query( collection(db, "products"), where( "category", "==", category ) ) : collection(db, "products");

        getDocs(myProducts)
          .then( response => {
            const productList = response.docs.map( doc => {
              const item = {
                id: doc.id,
                ...doc.data(),
              }

              return item;

            } )

            setproducts(productList);
            setisLoading(false);
          })
  }

  useEffect( () => {
    setisLoading(true);
    getProductsDB(category);


    // seedProducts();

  }, [category]);
  

    
  return (
    <>
    { isLoading ? <LuLoader2 className="loader" /> : <ItemList products={products} />}
    </>
  )
}

