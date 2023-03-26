import React from 'react';

const Link = (props) => {
    return (
        <>
        <a className='hover:text-accent' href={props.link}>{}</a>
        </>
    );
};

export default Link;