import React from 'react';
import './css/Home.css';

import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Amazon Banner"
            />
            <div className="home__row">
                <Product
                    id="99934332"
                    title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver"
                    price={12.99}
                    rating={3}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg"
                />
                <Product
                    id="294912855"
                    title="AmazonBasics Ni-MH AA & AAA Battery Charger With USB Port for Rechargeable Batteries"
                    price={17.30}
                    rating={4}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/71tEeZhIXYL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="758493"
                    title="AmazonBasics Double Braided Nylon Lightning to USB Cable, Advanced Collection"
                    price={16.2}
                    rating={4}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/81T2DGhCZlL._AC_SL1500_.jpg"
                />
                <Product
                    id="4390430893409"
                    title="AmazonBasics Humidifier with Night Light"
                    price={30.20}
                    rating={4}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/71Ius%2BB1VdL._AC_SL1500_.jpg"
                />
                <Product
                    id="8082480"
                    title="AmazonBasics Premium Dual Monitor Stand - Lift Engine Arm Mount, Aluminum - Black"
                    price={251.12}
                    rating={4}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/71-vVgPmt6L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="9165820"
                    title="Samsung CJ89 43' Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
                    price={649.99}
                    rating={5}
                    imageProd="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;
