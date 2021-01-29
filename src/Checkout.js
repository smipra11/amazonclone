import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./Checkoutproduct"
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" alt="" />

                {basket?.length === 0 ? (
                    <div>
                        <h2> your basket is empty</h2>
                    </div>
                ) : (
                        <div >
                            <h2> your shopping basket</h2>
                            {basket.map(item => (

                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}



                                />
                            ))}
                        </div>
                    )}

            </div>




            {basket.length > 0 && (
                <div className="ckeckput_right">
                 <Subtotal/>
                </div>
            )}

        </div>
    )
}

export default Checkout