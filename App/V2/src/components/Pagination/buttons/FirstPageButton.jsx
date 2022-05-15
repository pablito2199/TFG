import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

export const FirstPageButton = ({ query, setActualPage }) => {
    const navigate = useNavigate()
    const page = 1

    return <button
        title='Primeira páxina'
        onClick={() => { navigate(`/search?${query}${page}`); setActualPage(1) }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Previous</span>
        <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}