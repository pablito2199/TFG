import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/solid'

export const LeftPageButton = ({ query, actualPage, setActualPage }) => {
    const navigate = useNavigate()
    const page = parseInt(actualPage) - 1

    return (
        <button
            onClick={() => {
                if (actualPage > 1) {
                    setActualPage(parseInt(actualPage) - 1);
                    navigate(`/search?${query}${page}`)
                }
            }}
            className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
        >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}