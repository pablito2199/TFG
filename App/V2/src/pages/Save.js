import { CheckIcon } from '@heroicons/react/solid'
import { useEffect, useReducer } from 'react'
import { Navigate } from 'react-router-dom'

export default function Save() {
    const [timeout, dispatch] = useReducer(
        (state, action) => {
            switch (action) {
                case 'tick': return state - 1
                case 'end': return 0
                default: throw new Error('invalid action')
            }
        },
        3,
        arg => arg
    )

    useEffect(() => {
        const listener = setInterval(() => {
            dispatch('tick')
        }, 1000)
        return () => clearInterval(listener)
    }, [])

    if (timeout === 0) {
        return <Navigate to='/' />
    } else {
        return <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col items-center justify-center px-5 text-gray-700 text-center">
                <CheckIcon className='h-32 bg-green-400 text-white' />
                <div className="max-w-md">
                    <p className="text-2xl md:text-3xl font-light leading-normal">Os seus cambios foron gardados correctamente.</p>
                    <p className="mt-4">Redirixindo á páxina principal...</p>
                </div>
            </div>
        </div>
    }
}