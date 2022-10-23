import React, { useEffect, useState } from 'react';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';
import { addMenuItems } from '../../../features/menu/menuSlice';
import { Spinner } from '@chakra-ui/react';
import { addFood, incrementFood, decrementFood, removeFood } from '../../../features/quantities/quantitiesSlice';

// export default function Card({ description,name,price}) 
export default function Card({ type }) {

    const typeItems = useSelector(state => state.menu.menu[type])
    const foodQuantities = useSelector(state => state.quantities)
    const dispatch = useDispatch()
    const increment = (id, name, price) => {
        if (!foodQuantities[id]) {
            dispatch(addFood({
                id: id,
                name: name,
                price: price
            }))
        }
        else {
            dispatch(incrementFood({
                id: id,
            }))
        }

    }

    const decrement = (id) => {
        if (!foodQuantities[id]) {

        }
        else if (foodQuantities[id].quantity === 1) {
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
        typeItems ? typeItems.map(item => (
            <div className='card' key={item._id}>
                <div className="card-left">
                    <img className="veg-or-non-veg" />
                    <div className="food-item-name">
                        {item.name}
                    </div>
                    <div className="food-item-description">
                        {item.description}
                    </div>
                    <div className="food-item-price">
                        {`₹ ${item.price}`}
                    </div>
                </div>
                <div className="card-right">
                    <img className='food-item-image' />
                    <div className="card-add-item">
                        {foodQuantities[item._id] ?
                            <>
                                <label><MinusIcon h={4} w={5}
                                    onClick={() => decrement(item._id)}
                                /></label>
                                <div className='Items-middle-content'>
                                    <label className='Item-dish-quatity'>
                                        {foodQuantities[item._id].quantity}
                                    </label>
                                </div>
                                <label><SmallAddIcon h={6} w={6} onClick={() => increment(item._id, item.name, item.price)} /></label>
                            </> :
                            <div onClick={() => increment(item._id, item.name, item.price)} className='add-item-button'>
                                Αdd Item
                            </div>
                        }

                    </div>
                </div>
            </div>
        )) :
            <Spinner />
    )


}