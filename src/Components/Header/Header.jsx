import React from 'react';
import logo from '../../images/Logo.svg'
import Link from './Link';

const Header = () => {
    return (
        <>
        <nav className='h-20 px-10 bg-neutral flex items-center text-white justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-5 '>
                <Link link={"/shop"}>Shop</Link>
                <Link link={"/order"}>Order</Link>
                <Link link={"/inventory"}>Inventory</Link>
                <Link link={"/login"}>Login</Link>
            </div>

        </nav>
        </>
    );
};

export default Header;