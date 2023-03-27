import React from 'react';

const Product = ({product}) => {
    const {img,name,price,seller,ratings}=product
    return (
        <>
            <div className="card  bg-success shadow-xl">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body text-black">
                    <h2 className="card-title font-bold ">{name}</h2>
                    <p className='text-xl font-bold '>Price: ${price}</p>
                    <p className='text-xl font-bold '>Manufacturer: ${seller}</p>
                    <p className='text-xl font-bold '>Rating: ${ratings} Star</p>
                    <div className="card-actions mt-10 w-full">
                        <button className="btn btn-primary w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;