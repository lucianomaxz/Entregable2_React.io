import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { LuLoader2 } from "react-icons/lu";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../config/firebaseConfig';

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setisLoading] = useState(true);


    const getProductDB = (id) => {
        const productRef = doc( db, "products", id );

        getDoc(productRef)
            .then( response => {
                const product = {
                    id: response.id,
                    ...response.data(),
                }

                setItem(product);
                setisLoading(false);
            })
    }

    useEffect(() => {

         getProductDB(id);

    },[]);
  return (
        <>
            { isLoading ? <LuLoader2 className="loader"/> : <ItemDetail {...item}/>}
        </>
        
  )
}

