import React, { useEffect ,useState} from "react"
import { Items } from "./Data"
import ItemCard from "./ItemCard"
import UselocalStorage from "../Hooks/UselocalStorage"

const Card =({item}) =>{

    const result = Items.filter((state) =>state.id == item)

    const  [infavorite,setfavorte] = useState(UselocalStorage.ExisInfavorite({id:item}))


    const handDeleteFvorite =({id}) =>{
        UselocalStorage.UselocatStorage({id})
        setfavorte(!infavorite)
    }

    console.log(result)

    return (
        <div>
            <h1>{result.map((data) =>{
                return (
                <>
                {infavorite ? <ItemCard
                    handDeleteFvorite={handDeleteFvorite}
                    key={data.id}
                    id={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    val={true}
                    ratings={data.ratings}
                    price={data.price}/> : 
                    
                    null
                    
                }
                </>
                )
            })}</h1>
        </div>
    )
}

export default Card