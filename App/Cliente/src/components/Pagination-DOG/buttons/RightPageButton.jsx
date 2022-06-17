import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'

export const RightPageButton = ({ initialText, setData, actualPage, query, setActualPage, numberElements, numberElementsPerPage }) => {
    const token = localStorage.getItem('token') || null

    return <button
        title='Seguinte páxina'
        onClick={async () => {
            if (actualPage < Math.ceil(numberElements / numberElementsPerPage)) {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }

                setActualPage(parseInt(actualPage + 1))
                let page = actualPage
                const url = `/xunta${query}pagina=${parseInt(page + 1)}`
                const response = await fetch(url, requestOptions, { state: { initialText: initialText } })
                const jsonData = await response.json()
                setData(jsonData)
            }
        }}
        className="focus:outline-none relative inline-flex items-center px-2 py-2 border border-black bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 cursor-pointer"
    >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
}