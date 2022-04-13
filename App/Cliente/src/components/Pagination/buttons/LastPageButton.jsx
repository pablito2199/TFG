import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const LastPageButton = ({ query, setActualPage, numberElements, numberElementsPerPage }) => {
    const page = Math.ceil(numberElements / numberElementsPerPage)
    const navigate = useNavigate()

    return (
        <button
            onClick={() => { navigate(`/search?${query}${page}`); setActualPage(page - 1) }}
            className="focus:outline-none relative inline-flex items-center px-2 py-2 rounded-r-md border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
        >
            <span className="sr-only">Next</span>
            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}