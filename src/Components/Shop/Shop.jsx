import React, { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary';
import Products from './Products';



const Shop = () => {
     const [products, setProducts]= useState([]);
     useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
     },[])
     
    return (
    <section className='grid grid-cols-5'>
        
        <div className='col-span-4 '>
           <Products products={products}></Products>
        </div>
        <div className=' col-span-1 bg-accent h-screen'>
            <OrderSummary></OrderSummary>
        </div>
    </section>

    );
};

export default Shop;