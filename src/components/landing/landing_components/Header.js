import React from "react";
import { Select } from '@chakra-ui/react';

export default function Header() {

    return (
        <div className="header">
            <div className="logo-and-name">
                <img className="logo"/>
                <div className="name">Restaurant Name</div>
            </div>
            <div className="order-type-select-button">
                <Select focusBorderColor="#000000" textDecorationColor={"#000000"}>
                    <option value='option1'>Dine-in</option>
                    <option value='option2'>Take away</option>
                </Select>
            </div>
        </div>
    );
}
