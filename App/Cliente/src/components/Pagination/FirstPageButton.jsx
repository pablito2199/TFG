import React from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

export const FirstPageButton = ({ setActualPage }) => {
    return (
        <button
            onClick={() => setActualPage(0)}
            className="focus:outline-none relative inline-flex items-center px-2 py-2 rounded-l-md border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        >
            <span className="sr-only">Previous</span>
            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}