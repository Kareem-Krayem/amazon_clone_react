import React from 'react';
import './css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };

    return (
        <div className="CheckoutProduct">
            <img
                className="CheckoutProduct__image"
                src={image}
                alt=""
            />
            <dic className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>
                                    <span role="img" aria-label="⭐">⭐</span>
                                </p>
                            ))
                    }
                </div>
                <button
                    onClick={removeFromBasket}
                    className="CheckoutProduct__button">Remove from basket</button>
            </dic>
        </div>
    )
}

export default CheckoutProduct;
