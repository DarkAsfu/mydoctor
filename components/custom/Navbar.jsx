import React from 'react';
import { HeroShareApp } from '../hero-share-app';

const Navbar = () => {
    return (
        <div className="absolute left-0 top-0 z-50 w-full">
            <HeroShareApp/>
        </div>
    );
};

export default Navbar;