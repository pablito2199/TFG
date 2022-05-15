import { CheckIcon } from '@heroicons/react/solid'
import { useEffect, useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Save() {
    const navigate = useNavigate()
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
                    <button onClick={() => navigate('/')} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Volver á páxina principal</button>
                </div>
            </div>
        </div>
    }
}