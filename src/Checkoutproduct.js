import React from 'react'
import"./Checkoutproduct.css"
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const[{basket},dispatch] = useStateValue()

    const removeProduct =() =>{
      dispatch({
          type:"REMOVE FROM BASKET",
          id:id
      })
    }
    return (
        <div className="checkputproduct">
            <img  className="checkoutproduct_image"src={image} alt="" />
            <div className="checkoutproduct_desc">
              <strong>{title}</strong>
                <p>$ {price}</p>
               <div className="checkoutproduct_rating">
                   {Array(rating)
                   .fill()
                   .map((_,i)=>(

                    <p>*</p>
                   ))
                   
                   }

               </div>
                <button onClick={removeProduct}>Remove from basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct