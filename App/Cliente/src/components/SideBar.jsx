import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
    return (
        <div className='bg-black pt-6 pr-4 w-16 h-screen fixed'>
            <Link to="/" className='ml-4 flex cursor-pointer'>
                <img alt="Páxina de inicio" src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
            </Link>
        </div>
    );
};