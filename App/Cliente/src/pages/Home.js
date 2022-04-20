import { React } from 'react'
import { Link } from 'react-router-dom';

import { SearchField } from '../components/Search';

export default function Search() {
    return (
        <div className='flex flex-row font-bitter'>
            <div className='bg-black pt-6 pr-4 h-screen w-16 fixed'>
                <Link to="/" className='ml-4 flex cursor-pointer'>
                    <img src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
                </Link>
            </div>
            <div className='flex flex-col ml-20 items-center w-full'>
                <SearchField />
            </div>
        </div>
    );
};