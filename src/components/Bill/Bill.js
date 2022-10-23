import React from 'react';
import '../Bill/Bill.css';
import { Divider } from '@chakra-ui/react';



export default function Bill(props) {
    return (
        <div className='Bill-outer'>
            <div className='Bill-inner'>
                <div className='Bill-total-outer'>
                    <div className='Bill-total'><label className='Bill-total-title'>Items total : </label></div>
                    <div className='Bill-amount'><label className='Bill-total-price'>{props.total_price} /-</label></div>
                </div>

                {
                    props.total_price === 0 ?
                        <label>No items in cart</label> :
                        <>
                            <div className='Bill-total-outer'>
                                <div className='Bill-total'><label className='Bill-total-title'>Total Taxes : </label></div>
                                <div className='Bill-amount'><label className='Bill-total-price'>{props.total_tax} /-</label></div>
                            </div>

                            <div className='Bill-totalpay-outer'>
                                <div className='Bill-totalpay'><label className='Bill-totalpay-content'>Total To Pay :</label></div>
                                <div className='Bill-totalpay'><label className='Bill-totalpay-price'>{props.total_pay} /-</label></div>
                            </div>
                        </>

                }
            </div>
        </div>
    )
}
