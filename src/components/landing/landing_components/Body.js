import React from "react";
import { NavLink as Link } from 'react-router-dom';

export default function Body() {
    return (
        <div className="order-here">

            <div className="text">
                Order Here...
            </div>

            <Link to="menu">
                <button className="menu-button" >
                    <div className="button-container">Menu</div>
                </button>
            </Link>

        </div>

    );
}