import React from 'react';
import { FirstPageButton } from './buttons/FirstPageButton';
import { LastPageButton } from './buttons/LastPageButton';
import { LeftPageButton } from './buttons/LeftPageButton';
import { PagesButtons } from './buttons/PagesButtons';
import { RightPageButton } from './buttons/RightPageButton';

export const Pages = ({ actualPage, setActualPage, elements, numberElementsPerPage }) => {
    return (
        <div className='m-4 flex items-center justify-center w-full'>
            <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label="Pagination">
                <FirstPageButton actualPage={actualPage} setActualPage={setActualPage} />
                <LeftPageButton actualPage={actualPage} setActualPage={setActualPage} />
                <PagesButtons actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
                <RightPageButton actualPage={actualPage} setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
                <LastPageButton setActualPage={setActualPage} numberElements={elements} numberElementsPerPage={numberElementsPerPage} />
            </nav>
        </div>
    )
}