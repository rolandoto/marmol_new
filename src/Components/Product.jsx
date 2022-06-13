import React from 'react';
import {Link} from 'react-router-dom';


const Product = ({ product: {id,imgSrc, name, price } }) => {
  return (
    <div>
      <Link href={`/DetailProduct/${id}`}>
        <div className="product-card">
          <img 
            src={imgSrc}
            height={250}
            className="product-image"
          />
        </div>
      </Link>
    </div>
  )
}

export default Product