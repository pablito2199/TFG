import React from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/solid'

export const PagesNotSeen = () => {
    return <div className="relative inline-flex items-center px-2 py-2 border border-black text-sm font-medium text-gray-500">
        <span className="sr-only">More</span>
        <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
    </div>
}