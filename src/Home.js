import React from 'react'
import "./Home.css";
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/OP/SFH/GW/D15593517_IN_OP_BTS_Mar20_1500x600_2._CB429786287_.jpg" 
            alt=""/>
            <div className="home__row">
                <Product 
                    id="1efc67r" 
                    title="Amazon Brand - Solimo Griggio 100% PEVA Shower Curtain, 72 inch x 79 inch, Green" 
                    price={419}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/912NjFoFdGL._AC_UL320_.jpg"
                />
                <Product 
                    id="345e8yg" 
                    title="Titan Connected X Black Hybrid Smartwatch for Men with Heart Rate Monitor + Full touch Display + Interchangeable strap - 90116NM01" 
                    price={11995}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71FV0--9YwL._UX466_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="rt4hu85" 
                    title="Fender Squier MM Stratocaster Electric Guitar - Black with Maple Neck (Bundle, Black)" 
                    price={9999}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61S+NvLaCfL._AC_UL320_.jpg"
                />
                <Product 
                    id="67ehf90" 
                    title="Mediweave KN95 (Equivalent to N95, FFP2) Mask/Respirator,CE certified, Pack of 5" 
                    price={399}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51lVFg1iKIL._SX425_.jpg"
                />
                <Product 
                    id="ks251u7" 
                    title="THE LOON STORIES Paperback – 15 September 2020" 
                    price={225}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81aJJKJON7L._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="19codb2" 
                    title="LG 164 cms (65 inches) 4K Ultra HD Smart OLED TV OLED65C9PTA | With Built-in Alexa (PCM Black) (2019 Model)" 
                    price={236890}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81ZETFG8ZGL._AC_UY218_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
