import React, { useState } from 'react';
import '../Item/Item.css';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
// import veg from '../Images/Veg.jpg';
// import nonveg from '../Images/Nonveg.png';
import { incrementFood, decrementFood, removeFood } from '../../features/quantities/quantitiesSlice';

export default function Item({ id, dish_name, quantity, dish_price, total_price }) {

    const quantities = useSelector(state => state.quantities)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(incrementFood({
            id: id,
        }))
    }

    const decrement = () => {
        if (!quantities[id]) {

        }
        else if (quantities[id].quantity === 1) {
            dispatch(removeFood({
                id: id
            }))
        }
        else {
            dispatch(decrementFood({
                id: id
            }))
        }
    }
    return (
        <div className='Item-outer'>
            <div className='Item-inner'>
                <div className='Item-left-outer'>
                    {/* <img className='Item-symbol' src={veg_non === "veg" ? veg : nonveg} /> */}
                    <div className='Item-dish'><label className='Item-dish-name'>{dish_name}</label></div>
                </div>

                <div className='Item-middle-outer'>
                    <div className='Item-middle-inner'>
                        <label><MinusIcon h={4} w={5} onClick={decrement} /></label>
                        <label className='Items-middle-content'><label className='Item-dish-quatity'>{quantity}</label></label>
                        <label><SmallAddIcon h={6} w={6} onClick={increment} /></label>
                    </div>
                </div>

                <div className='Item-right-outer'>
                    <div className='Item-dish-price'><label className='Item-dish-price'>{total_price} /-</label></div>
                </div>
            </div>
        </div>
    )
}
