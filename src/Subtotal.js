import React from 'react'
import  CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
//import "./Subtotal.css"
import {getbasketTotal} from "./Reducer"

const Subtotal =() =>{

    const [{ basket },dispatch] = useStateValue();
    return(
    <div className="subtotal">
        
        <CurrencyFormat
        renderText ={(value)=>(
            <>
            <p>
        Subtotal({basket.length}item):<strong>{`${value}`}</strong>
            </p>
            </>
        )}
        decimalScale={2}
        displayType= {"text"}
        value={getbasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal