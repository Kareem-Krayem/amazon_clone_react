import React from 'react';
import './css/Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, imageProd, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                imageProd,
                price,
                rating
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
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
            </div>
            <img
                key={id}
                className="product__image"
                src={imageProd}
                alt={id}
            />
            <button className="product__button" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
