import { useEffect, useReducer } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import imagen from '../images/not-found.png'

export default function NotFound() {
    const navigate = useNavigate()
    const [timeout, dispatch] = useReducer(
        (state, action) => {
            switch (action) {
                case 'tick': return state - 1
                case 'end': return 0
                default: throw new Error('invalid action')
            }
        },
        15,
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
        return <div className='flex flex-row'>
            <div className='bg-black pt-6 pr-4 h-screen w-16 fixed'>
                <Link to="/" className='ml-4 flex cursor-pointer'>
                    <img src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
                </Link>
            </div>
            <div className="h-screen w-screen bg-gray-100 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="max-w-md">
                        <p className="text-2xl md:text-3xl font-light leading-normal">Sentímolo, non se puido atopar esta páxina.</p>
                        <p className="mb-4">Retornarás á páxina principal en {timeout} segundos</p>
                        <button onClick={() => navigate('/')} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Volver á páxina principal</button>
                    </div>
                    <div className="max-w-lg">
                        <img alt="Page not found" src={imagen} className='h-28 w-28' />
                    </div>
                </div>
            </div>
        </div>
    }
}