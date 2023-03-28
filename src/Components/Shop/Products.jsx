import React from 'react';
import Product from './Product'
const Products = (props) => {
   
    return (
        <div className='grid grid-cols-3 gap-4 mx-5 mb-5'>
            {
                props.products.slice(0,5).map(product=><Product key={product.id} product={product} handleAddToCart={props.handleAddToCart}></Product>)
            }
        </div>
    );
};

export default Products;