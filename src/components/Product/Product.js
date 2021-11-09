import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4> {name} </h4>
                <p style={{ fontWeight: "bold", color: "orange" }}> <small> By: {seller} </small> </p>
                <p>$ {price}</p>
                <p style={{ color: "navy", fontWeight: "400" }}><span> Only {stock}left is stork soon </span></p>
                <button onClick={() => props.hendleAdProduct(props.product)}
                    className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;