import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { LuLoader2 } from "react-icons/lu";

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(true);

        getProduct(id)
            .then( resp => {
                setItem(resp);
                setisLoading(false);})
            .catch( err => console.log("ERROR 404"))

        
    },[]);
  return (
        <>
            { isLoading ? <LuLoader2 className="loader"/> : <ItemDetail {...item}/>}
        </>
        
  )
}

