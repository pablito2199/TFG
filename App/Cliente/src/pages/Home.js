import { React } from 'react'

import { SearchField } from '../components/search-page'

export default function Search() {
    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min5:ml-10'>
            <SearchField />
        </div>
    )
}