import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

     useEffect(()=>{
            const storedCart = getShoppingCart()
            let saveCart = []
            
            for(const id in storedCart){
               const addedProduct = products.find(product=> product.id === id);
               
               if(addedProduct){
                const quantity = storedCart[id];
               addedProduct.quantity= quantity
               saveCart.push(addedProduct)
               }
              
            console.log(addedProduct)
            }
            setCart(saveCart)
     },[products])


      const handleAddToCart =(product)=>{
       const newCart =[...cart, product]
       setCart(newCart)
       addToDb(product.id)

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