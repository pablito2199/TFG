import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'

export const RightPageButton = ({ initialText, setData, actualPage, query, setActualPage, numberElements, numberElementsPerPage }) => {
    return <button
        title='Seguinte páxina'
        onClick={async () => {
            if (actualPage < Math.ceil(numberElements / numberElementsPerPage)) {
                setActualPage(parseInt(actualPage + 1))
                let page = actualPage
                const url = `/xunta${query}pagina=${parseInt(page + 1)}`
                const response = await fetch(url, { state: { initialText: initialText } })
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