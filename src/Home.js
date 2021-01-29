import React from 'react'
import "./Home.css"
import Product from "./Product.js"

const Home = () => {
    return (
        <div className="home">


            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />



            <div className="home_row">
                <Product
                    id="123123"
                    title="2020 Newest HP Pavilion 15.6 Inch FHD 1080P Laptop, Intel Core i5-1035G1"
                    price={669.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41QLZRBgosL._AC_SY322_.jpg" alt=""
                />

                  <Product
                    id="1122345"
                    title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
                    price={119.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-YjM0N2NkNWIt-w210._AC_SY400_.jpg" alt=""
                />
            </div>


            <div className="home_row">
                <Product
                    id="4201978"
                    title="viewstar Queen Pillows for Sleeping, Bed Pillows 2 Pack Hotel Quality Pillow,"
                    price={25.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/612Ltgoo13L._AC_UL100_SR100,100_.jpg" alt=""
                />

                <Product
                    id="03121978"
                    title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
                    price={169.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SY220_.jpg" alt=""
                />

                <Product
                    id="19782020"
                    title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal"
                    price={25.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41JniElJFkL._AC_SY400_.jpg" alt=""
                />
            </div>


            <div className="home_row">
                <Product
                    id="1122345"
                    title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
                    price={119.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-YjM0N2NkNWIt-w210._AC_SY400_.jpg" alt=""
                />


            </div>
        </div>

    )
}

export default Home
