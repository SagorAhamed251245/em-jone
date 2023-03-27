import React from 'react';

const Link = (props, item) => {
    return (
        <>
        <a className='hover:text-accent' href={props.link}>{props.children}</a>
        </>
    );
};

export default Link;