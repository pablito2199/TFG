import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const LastPageButton = ({ initialText, setActualPage, numberElements, numberElementsPerPage }) => {
    const page = Math.ceil(numberElements / numberElementsPerPage)
    const navigate = useNavigate()

    return <button
        title='Última páxina'
        onClick={async () => {
            navigate(`/search?text=${initialText}&page=${page}`, { state: { initialText: initialText, page: page } })
            if (page > 0)
                setActualPage(page)
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Next</span>
        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}