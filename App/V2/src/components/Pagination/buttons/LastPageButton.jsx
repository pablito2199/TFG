import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const LastPageButton = ({ setData, modal, query, setActualPage, numberElements, numberElementsPerPage }) => {
    const page = Math.ceil(numberElements / numberElementsPerPage)
    const navigate = useNavigate()

    return <button
        title='Última páxina'
        onClick={async () => {
            if (!modal) {
                navigate(`/search?${query}${page}`);
                if (page > 1)
                    setActualPage(page)
            } else {
                const url = `/xunta${query}pagina=${page}`
                const response = await fetch(url)
                const jsonData = await response.json()
                setData(jsonData)
                if (page > 1)
                    setActualPage(page)
            }
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Next</span>
        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}