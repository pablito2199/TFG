import { useEffect, useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function EditDogExceptional() {
    const navigate = useNavigate()
    const [timeout, dispatch] = useReducer(
        (state, action) => {
            switch (action) {
                case 'tick': return state - 1
                case 'end': return 0
                default: throw new Error('invalid action')
            }
        },
        10,
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
        return <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
            <div>
                <div className='mt-80 font-semibold italic text-center'>
                    <p className='text-red-600'>Esta lei era de carácter excepcional e xa pasou a súa data de validez, co que non se pode editar.</p>
                    <p className="mt-8 mb-2">Retornarás á páxina principal en {timeout} segundos</p>
                    <button onClick={() => navigate('/')} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Volver á páxina principal</button>
                </div>
            </div>
        </div>
    }
}