import  React from "react"
import {useParams} from "react-router-dom"
import Container from "../Components/Container"
import { Items } from "../Components/Data"
import { AddRounded} from "@mui/icons-material";

const Detailproduct =() =>{

    const {id} = useParams()
    
    const result = Items.find(index => index.id ==id)

    if(!result) return null
    
    return (
        <div className='Detail'>
         <div className="itemContent">
         <Container>
            <p className='Detail-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur tempora doloribus laboriosam rem neque consequuntur laborum architecto dolorum reprehenderit voluptatum, earum et eligendi asperiores, quos cupiditate nostrum, error perspiciatis?
            Voluptatum officiis quaerat exercitationem eum cumque. Temporibus ut tempora porro neque iste, pariatur magni odit sint asperiores. Tenetur, atque. Similique illo rem blanditiis odio nihil aliquam corporis distinctio atque laudantium?
           </p>
            <img className='Detail-image' src={result.imgSrc} />
            <img className='Detail-image' src={result?.imgSrcone} />
            
            <div className='Detail-priceContainer'>
                <span className='Detail-price'>
                <span>$ </span>
                {result.price}
                </span>
            </div>

            <i className="addToCart-detail">
                <AddRounded />
                </i>  
             </Container>
      </div>
    </div>
    )

}
export default Detailproduct