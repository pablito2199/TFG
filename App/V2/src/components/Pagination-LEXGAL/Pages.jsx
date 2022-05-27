import React from 'react'

import { FirstPageButton } from './buttons/FirstPageButton'
import { LastPageButton } from './buttons/LastPageButton'
import { LeftPageButton } from './buttons/LeftPageButton'
import { PagesButtons } from './buttons/PagesButtons'
import { RightPageButton } from './buttons/RightPageButton'

export const Pages = ({ initialText, actualPage, setActualPage, elements, numberElementsPerPage }) => {
    return <div className='flex items-center justify-center w-full'>
        <nav className='relative z-0 inline-flex shadow-sm -space-x-px' aria-label="Pagination">
            <FirstPageButton initialText={initialText} actualPage={actualPage} setActualPage={setActualPage} />
            <LeftPageButton initialText={initialText} actualPage={actualPage} setActualPage={setActualPage} />
            <PagesButtons initialText={initialText} actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
            <RightPageButton initialText={initialText} actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
            <LastPageButton initialText={initialText} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
        </nav>
    </div>
}