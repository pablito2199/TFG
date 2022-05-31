import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/solid'

export const LeftPageButton = ({ initialText, actualPage, setActualPage }) => {
    const navigate = useNavigate()

    return <button
        title='Páxina anterior'
        onClick={async () => {
            if (actualPage > 1) {
                setActualPage(parseInt(actualPage) - 1)
                let page = actualPage - 1
                navigate(`/search?text=${initialText}&page=${page}`, { state: { initialText: initialText, page: page } })
            }
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}