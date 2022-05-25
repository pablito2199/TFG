import React from 'react'

import { FirstPageButton } from './buttons/FirstPageButton'
import { LastPageButton } from './buttons/LastPageButton'
import { LeftPageButton } from './buttons/LeftPageButton'
import { PagesButtons } from './buttons/PagesButtons'
import { RightPageButton } from './buttons/RightPageButton'

export const Pages = ({ setData, modal, query, actualPage, setActualPage, elements, numberElementsPerPage }) => {
    return <div className='flex items-center justify-center w-full'>
        <nav className='relative z-0 inline-flex shadow-sm -space-x-px' aria-label="Pagination">
            <FirstPageButton setData={setData} modal={modal} query={query} actualPage={actualPage} setActualPage={setActualPage} />
            <LeftPageButton setData={setData} modal={modal} query={query} actualPage={actualPage} setActualPage={setActualPage} />
            <PagesButtons setData={setData} modal={modal} query={query} actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
            <RightPageButton setData={setData} modal={modal} query={query} actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
            <LastPageButton setData={setData} modal={modal} query={query} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
        </nav>
    </div>
}