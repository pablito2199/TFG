import { Menu, Transition } from "@headlessui/react"
import { UserCircleIcon } from "@heroicons/react/solid"
import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../context"
import { useUser } from "../hooks"

export const SideBar = () => {
    const { user } = useUser()

    return <div className='bg-black pt-6 pr-4 w-16 h-screen fixed font-bitter'>
        <Link to="/" className='focus:outline-none ml-4 flex cursor-pointer'>
            <img alt="Páxina de inicio" src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
        </Link>
        <div className='z-100 mt-10 fixed bottom-2 ml-3'>
            <MyDropdown user={user} />
        </div>
    </div >
}

function MyDropdown({ user }) {
    const { logout } = useContext(AuthenticationContext)
    const navigate = useNavigate()

    if (user) {
        const roles = user.roles

        return <Menu>
            {({ open }) => (
                <>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        {open && (
                            <div className="border-4 px-12 pb-8 pt-4 bg-white flex flex-col text-gray-700">
                                <Menu.Items static>
                                    <div className="flex flex-col">
                                        <Menu.Item disabled>
                                            <span className="font-semibold text-lg self-center">{user.nome} {user.apelidos}</span>
                                        </Menu.Item>
                                        <div className="border my-2" />
                                        {
                                            roles.includes('ROLE_ADMIN')
                                            &&
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`py-1 ${active ? 'bg-blue-green text-white' : 'bg-white'}`}
                                                        onClick={() => { navigate("/registerUsers") }}
                                                    >
                                                        Rexistrar usuarios
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        }
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`py-1 ${active ? 'bg-blue-green text-white' : 'bg-white'}`}
                                                    onClick={logout}
                                                >
                                                    Cerrar sesión
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </div>
                        )}
                    </Transition>
                    <Menu.Button className={`text-white border-t`}>
                        <UserCircleIcon className="text-white cursor-pointer py-2 w-10" />
                        <span>{user.nome}</span>
                    </Menu.Button>
                </>
            )}
        </Menu>
    } else {
        return <></>
    }
}