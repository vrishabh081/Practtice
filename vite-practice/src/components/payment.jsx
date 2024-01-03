import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// Dummy Items-
const dummyItems = [
    {
        name : "Carrot",
        price: 100,
        qty: 3
    },
    {
        name : "Tomato",
        price: 120,
        qty: 1
    },
]

const Payment = () => {
   let x;
    // make payment-
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51NogAnSBq8QJ6UBHA3dFy1To5wPotmCdhmFQIBnR9xT0G991ko6yS0u2NgpyzlZDnMbALxaodkH9bds14ubfhcoy00770SR4o5")   //published key-
        const result = await axios({
            method: "POST",
            url: "http://localhost:8000/create-checkout-session",
            data: dummyItems,
            headers: {"Content-Type": "application/json"}
        })
        stripe.redirectToCheckout({
            sessionId: result.data.id
        })
    }

    const handleChange = (e) => {
        x = e.target.value
    }

    return (
        <div>
            Payment Testing
            <input type="text" name="" id="" value={x} onChange={(e) => handleChange(e)} />
            <button onClick={makePayment}>Payment</button>
        </div>
    )
}

export default Payment
