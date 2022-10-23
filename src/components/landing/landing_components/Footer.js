import React from "react";
import location from "../images/location.png" 
import phone from "../images/phone.png"

export default function Footer() {
    return (
        <div className="footer">
            <h1>Restaurant name</h1>
            <div className="location">
                <img className="location-icon" src={location}/>
                <div className="address">Lorem ipsum dolor sit amet elit Consequuntur, sit!</div>
            </div>
            <div className="phone">
                <img className="phone-icon" src={phone}/>
                <div className="phone-number">XXXXXXXXXX/XXXXXXXXXX</div>
            </div>
        </div>
    );
}