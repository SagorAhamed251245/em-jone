import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from './Products';



const Shop = () => {
     const [products, setProducts]= useState([]);
     const [cart, setCart]= useState([])
     useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
     },[]);


      const handleAddToCart =(product)=>{
       const newCart =[...cart, product]
       setCart(newCart)

      }
    return (
    <section className='grid grid-cols-5'>
        
        <div className='col-span-4 '>
           <Products products={products} handleAddToCart={handleAddToCart} ></Products>
        </div>
        <div className=' col-span-1 '>
            
            <Cart cart={cart}></Cart>
        </div>
    </section>

    );
};

export default Shop;