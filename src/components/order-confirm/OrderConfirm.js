import React, { useEffect, useState } from 'react';
import './Order_confirm.css';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';

export default function OrderConfirm({ name, phone }) {
    const [ordered, setOrdered] = useState(false)
    const [status, setStatus] = useState(0)

    const quantity = useSelector(state => state.quantities)
    useEffect(() => {
        const price = Object.keys(quantity).reduce((total, current) => (
            total + quantity[current].price * quantity[current].quantity
        ), 0)
        const orderedItems = Object.values(quantity)
        if (orderedItems.length === 0) {
            setOrdered('Not Placed')
        }
        else {
            const order =
            {
                dinerName: name,
                dinerPhoneNumber: phone,
                orderedItems,
                price: price
            }
            const placeOrder = async () => {
                const res = await fetch(process.env.REACT_APP_BACKEND + '/diner/place-order', {
                    method: 'POST',
                    headers: {
                        accept: 'application.json',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(order)
                })
                const message = await res.text()
                const returnedStatus = res.status
                setOrdered(true)
                setStatus(returnedStatus)
            }
            placeOrder()
        }
    }, [quantity, name, phone])



    return (

        ordered ? <>
            <div className='Order-outer'>
                <div className="Order-inner">
                    {status === 200 && <CheckCircleIcon width="10rem" height="10rem" />}
                    {(status === 409 || status === 500) && <CloseIcon width="10rem" height="10rem" />}
                    <div className='Order-text-outer'>
                        <label className='Order-text'>
                            {status === 200 && 'Order Confirmed!'}
                            {(status === 409 || status === 500) && 'Retry'}
                        </label>
                    </div>
                </div>
            </div>
        </> :
            <Spinner />


    )
}
