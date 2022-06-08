import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'

export const LeftPageButton = ({ initialText, setData, query, actualPage, setActualPage }) => {
    const token = localStorage.getItem('token') || null
    return <button
        title='Páxina anterior'
        onClick={async () => {
            if (actualPage > 1) {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }

                setActualPage(parseInt(actualPage) - 1)
                let page = actualPage - 1
                const url = `/xunta${query}pagina=${page}`
                const response = await fetch(url, requestOptions, { state: { initialText: initialText } })
                const jsonData = await response.json()
                setData(jsonData)
            }
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}