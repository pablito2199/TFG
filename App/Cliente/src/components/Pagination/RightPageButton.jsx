import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'

export const RightPageButton = ({ actualPage, setActualPage, numberPages, numberElementsPerPage }) => {
    return (
        <a
            onClick={() => { if (actualPage < numberPages / numberElementsPerPage - 1) setActualPage(actualPage + 1) }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
    )
}