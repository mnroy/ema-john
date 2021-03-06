import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct,] = useState(first10);

    const [card, setCard] = useState([]);

    const hendleAdProduct = (product) => {
        console.log("product added", product);
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    product.map(pd => <Product
                        hendleAdProduct={hendleAdProduct}
                        product={pd}
                    ></Product>)
                }

            </div>

            <div className="card-container">
                <Cart cart={card}></Cart>
            </div>
        </div>
    );
};

export default Shop;