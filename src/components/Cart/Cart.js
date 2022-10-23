import React, { useEffect, useState } from 'react';
import '../Cart/Cart.css';
import Bill from '../Bill/Bill';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, } from '@chakra-ui/react';
import { NavLink as Link, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import { nanoid } from '@reduxjs/toolkit';

export default function Cart() {


    const [totalAmt, setTotalAmt] = useState(0);
    const quantity = useSelector(state => state.quantities)
    useEffect(() => {
        const total = Object.keys(quantity).reduce((total, current) => (
            total + quantity[current].price * quantity[current].quantity
        ), 0)
        setTotalAmt(total)
    }, [quantity])
    return (
        <div className='Cart-outer'>
            <div className='Cart-back-option'>
                <ArrowBackIcon w={10} h={10} />
                <label className='Cart-back-option-content'>My Order</label>
            </div>

            <div className='Cart-items-outer'>
                <div className='Card-item-inner'>
                    <div className='Card-items-title'>
                        <label className='Card-items-title-content'>Your Order</label>
                    </div>

                    {
                        Object.keys(quantity).map(key => (
                            <Item
                                key={nanoid()}
                                id={quantity[key].referenceId}
                                dish_name={quantity[key].name}
                                dish_price={quantity[key].price}
                                quantity={quantity[key].quantity}
                                total_price={quantity[key].quantity * quantity[key].price}
                            />
                        ))
                    }
                </div>
            </div>

            {
                Object.keys(quantity).length === 0 ?
                    <label>Cart empty add items</label> :
                    <>
                        <div className='Cart-items-outer1'>
                            <div className='Card-item-inner'>
                                <div className='Card-items-title'>
                                    <label className='Card-items-title-content'>Bill Details</label>
                                </div>

                                <Bill total_price={totalAmt} total_tax={500} total_pay={totalAmt + 500} veg_non={"non"} />
                            </div>
                        </div>



                        <div className='Card-items-button'>
                            <Link to="/details">
                                <Button rightIcon={<ArrowForwardIcon />}
                                    colorScheme='teal'
                                    padding='2%'
                                    borderRadius='1rem'
                                    borderTopRightRadius='0'
                                    borderTopLeftRadius='0'
                                    width='100%'
                                    height='5rem'
                                    fontSize='2rem'
                                >
                                    Place Order
                                </Button>
                            </Link>
                        </div>
                    </>
            }
        </div>
    )
}
