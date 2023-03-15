import React from 'react';
import { CardImg } from 'react-bootstrap';

const Product = ({product}) => {
    // console.log(product)
    return (
        <div  className='py-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <CardImg  src={product.image} variant='top'/>
            </a>
        </div>
    );
};

export default Product;