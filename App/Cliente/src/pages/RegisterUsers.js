import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/solid'
import { useUser } from '../hooks'

export default function RegisterUsers() {
    const { user, create } = useUser()

    const [userInfo, setUserInfo] = useState('')
    const [nome, setNome] = useState('')
    const [apelidos, setApelidos] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [valido, setValido] = useState('')
    const [admin, setAdmin] = useState(false)
    const [mostrar, setMostrar] = useState(false)

    const checkFields = () => {
        if (userInfo === "" || !/^[a-zA-Z0-9\-.]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,255}$/.test(userInfo)) {
            setError("Email con formato inválido.")
            return false
        }
        if (nome === "" || !/^[a-zA-Zá-úÁ-Ú ]*$/.test(nome)) {
            setError("Nome con formato inválido.")
            return false
        }
        if (apelidos === "" || !/^[a-zA-Zá-úÁ-Ú ]*$/.test(apelidos)) {
            setError("Apelidos con formato inválido.")
            return false
        }
        if (pass === "" || pass.length < 8) {
            setError("O contrasinal debe conter un mínimo de 8 caracteres.")
            return false;
        }

        return true
    }

    const submit = async () => {
        let response

        if (!checkFields()) {
            setValido('')
            return
        }

        if (admin) {
            response = await create({
                email: userInfo,
                nome: nome,
                apelidos: apelidos,
                password: pass,
                roles: ["ROLE_USER", "ROLE_ADMIN"]
            })
        } else {
            response = await create({
                email: userInfo,
                nome: nome,
                apelidos: apelidos,
                password: pass,
                roles: ["ROLE_USER"]
            })
        }
        if (response === 201) {
            setValido('Usuario rexistrado correctamente.')
            setError('')
            setUserInfo('')
            setNome('')
            setApelidos('')
            setPass('')
        } else if (response === 409) {
            setError('Xa existe un usuario con ese email.')
            setValido('')
        }
    }

    const mostrarContrasena = () => {
        setMostrar(!mostrar)
    }

    if (user) {
        const roles = user.roles
        if (roles && !roles.includes('ROLE_ADMIN'))
            return <Navigate to='/' />
        else
            return <main className='w-screen h-screen flex flex-col items-center justify-center font-bitter'>
                <div className='flex flex-col bg-blue-lex-gal text-center w-7/12'>
                    <h1 className='mt-8 text-white font-bold text-2xl'>Rexistro de usuarios</h1>
                    <div className='flex flex-col px-40 pt-8 pb-4 gap-6'>
                        <div className='flex flex-col gap-1'>
                            <span className='self-start ml-1 text-lg font-semibold'>Email</span>
                            <div className='bg-white flex items-center gap-2'>
                                <UserIcon className='ml-2 h-6 text-gray-700' />
                                <input className='border-none flex flex-1' type="text" value={userInfo} placeholder='Email' onChange={(e) => setUserInfo(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='self-start ml-1 text-lg font-semibold'>Nome</span>
                            <div className='bg-white flex items-center gap-2'>
                                <UserIcon className='ml-2 h-6 text-gray-700' />
                                <input className='border-none flex flex-1' type="text" value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='self-start ml-1 text-lg font-semibold'>Apelidos</span>
                            <div className='bg-white flex items-center gap-2'>
                                <UserIcon className='ml-2 h-6 text-gray-700' />
                                <input className='border-none flex flex-1' type="text" value={apelidos} placeholder='Apelidos' onChange={(e) => setApelidos(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='self-start ml-1 text-lg font-semibold'>Contrasinal</span>
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
                        <div className='p-2 flex items-center justify-center gap-3'>
                            <span className='self-start ml-1 text-lg font-semibold'>Usuario administrador</span>
                            <input onClick={() => setAdmin(!admin)} type="checkbox" className='rounded-xl form-checkbox h-4 w-4 text-green-600 cursor-pointer' />
                        </div>
                    </div>
                    <p className='text-green-700 font-semibold pb-4'>{valido}</p>
                    <p className='text-red-500 font-semibold pb-4'>{error}</p>
                    <button onClick={submit} className='mb-8 focus:outline-none flex text-md justify-center gap-2 self-center align-center px-4 py-4 bg-blue-green hover:bg-blue-700 w-60 text-white font-semibold cursor-pointer'>
                        <span>Rexistrar usuario</span>
                    </button>
                </div>
            </main>
    }
}