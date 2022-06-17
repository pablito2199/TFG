import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/solid'

export const RightPageButton = ({ actualPage, initialText, setActualPage, numberElements, numberElementsPerPage }) => {
    const navigate = useNavigate()
    return <button
        title='Seguinte páxina'
        onClick={async () => {
            if (actualPage < Math.ceil(numberElements / numberElementsPerPage)) {
                setActualPage(parseInt(actualPage + 1))
                let page = actualPage
                navigate(`/search?text=${initialText}&page=${parseInt(page + 1)}`, { state: { initialText: initialText, page: page + 1 } })
            }
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}