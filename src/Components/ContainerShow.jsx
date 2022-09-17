import React from 'react'

const Container =({children}) =>{
  
  //children es muy necesario cuando de ancabeza como un componente
    return (
    <div className='Container-show' onClick={``} >
        {children}
    </div>
  )
}
export default Container

    