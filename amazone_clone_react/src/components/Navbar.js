import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import {
    Search,
    ShoppingBasket
} from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Navbar() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="navbar">
            <Link to="/">
                <img
                    className="navbar__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="Amazon Logo"
                />
            </Link>
            <div className="navbar__search">
                <input
                    className="navbar__searchInput"
                    type="text"
                    placeholder="search..."
                />
                <Search className="navbar__searchIcon" />
            </div>
            <div className="navbar__header">
                <Link
                    className="navbar__link"
                    to="/login">
                    <div className="navbar__options">
                        <span className="navbar__optionLineOne">Hello Kareem</span>
                        <span className="navbar__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link
                    className="navbar__link"
                    to="/">
                    <div className="navbar__options">
                        <span className="navbar__optionLineOne">Returns</span>
                        <span className="navbar__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link
                    className="navbar__link"
                    to="/">
                    <div className="navbar__options">
                        <span className="navbar__optionLineOne">Your</span>
                        <span className="navbar__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link
                    className="navbar__link"
                    to="/checkout">
                    <div className="navbar__optionBasket">
                        <ShoppingBasket />
                        <span className="navbar__optionLineTwo navbar__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;
