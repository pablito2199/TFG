import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/solid'

export const RightPageButton = ({ actualPage, query, setActualPage, numberElements, numberElementsPerPage }) => {
    const navigate = useNavigate()
    const page = parseInt(actualPage) + 1

    return (
        <button
            onClick={() => {
                if (actualPage < Math.ceil(numberElements / numberElementsPerPage - 1)) {
                    setActualPage(parseInt(actualPage) + 1);
                    navigate(`/search?${query}${page}`)
                }
            }}
            className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-blue-500 bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
        >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}