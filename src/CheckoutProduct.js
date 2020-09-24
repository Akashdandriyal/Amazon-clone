import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import starPic from './images/star.svg'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            // eslint-disable-next-line
                            <img className="product__star" src={starPic} alt="" />
                        ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
