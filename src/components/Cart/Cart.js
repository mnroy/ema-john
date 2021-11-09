import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (shipping > 0) {
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandeTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered {cart.length} </h3>
            <h4>Product Price: {formatNumber(total)} </h4>
            <p><small>Shipping Cost: {shipping} </small></p>
            <p><small> Tax + vat: {tax} </small></p>
            <p>Total price: {grandeTotal} </p>
        </div>
    );
};

export default Cart;