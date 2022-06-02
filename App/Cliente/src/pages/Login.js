import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthenticationContext } from '../context'
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/solid'

export default function Login() {
    const { login, isAuthenticated } = useContext(AuthenticationContext)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const submit = async (event) => {
        event.preventDefault()
        await login(user, pass)
        window.location.reload(false)
    }

    const mostrarContrasena = () => {
        setMostrar(!mostrar)
    }

    if (isAuthenticated)
        return <Navigate to='/' />
    else
        return <main className='w-screen h-screen flex flex-col items-center justify-center font-bitter'>
            <form className='flex flex-col bg-blue-lex-gal text-center w-7/12' onSubmit={submit}>
                <h1 className='mt-8 text-white font-bold text-2xl'>Inicio de sesión</h1>
                <div className='flex flex-col px-40 pt-8 pb-8 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <span className='self-start ml-1 text-lg font-semibold'>Email</span>
                        <div className='bg-white flex items-center gap-2'>
                            <UserIcon className='ml-2 h-6 text-gray-700' />
                            <input className='border-none flex flex-1' type="text" value={user} placeholder='Email' onChange={(e) => setUser(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='self-start ml-1 text-lg font-semibold'>Contraseña</span>
                        <div className='bg-white flex items-center gap-2'>
                            <LockClosedIcon className='ml-2 h-6 text-gray-700' />
                            {
                                mostrar
                                    ?
                                    <input className='border-none flex flex-1' value={pass} type="text" placeholder='Contraseña' onChange={(e) => setPass(e.target.value)}></input>
                                    :
                                    <input className='border-none flex flex-1' value={pass} type="password" placeholder='Contraseña' onChange={(e) => setPass(e.target.value)}></input>

                            }
                            <EyeIcon className='h-6 mr-2 text-blue-green cursor-pointer' onClick={mostrarContrasena} />
                        </div>
                    </div>
                </div>
                <button onClick={submit} type="submit" className='mb-8 focus:outline-none flex text-md justify-center gap-2 self-center align-center px-4 py-4 bg-blue-green hover:bg-blue-700 w-60 text-white font-semibold cursor-pointer'>
                    <span>Iniciar sesión</span>
                </button>
            </form>
        </main>
}