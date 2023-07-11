import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinksWrapper } from './style';

const Links = () => {
    return (
        <LinksWrapper>
            <NavLink to='#' className='navLink'>Description</NavLink>
            <NavLink to='#' className='navLink'>Reviews</NavLink>
            <NavLink  to='#' className='navLink'>Shipping</NavLink>
            <NavLink to='#' className='navLink'>About company</NavLink>
        </LinksWrapper>
    );
}

export default Links;
