import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'

export const LeftPageButton = ({ actualPage, setActualPage }) => {
    return (
        <button
            onClick={() => { if (actualPage > 0) setActualPage(actualPage - 1) }}
            className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}