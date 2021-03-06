import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import API from '../../api'

const AuthenticationContext = React.createContext({
    isAuthenticated: false,
    errors: false,
    login: () => { },
    logout: () => { },
    reset: () => { }
})
const client = API.instance()

function SecuredApp({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('authenticated') || false))
    const [errors, setErrors] = useState(false)

    const reset = async () => {
        localStorage.setItem('authenticated', JSON.stringify(false))
        setErrors(false)
        setIsAuthenticated(false)
    }
    const login = async (user, pass) => {
        const loginSuccessful = await client.login(user, pass)

        localStorage.setItem('authenticated', JSON.stringify(loginSuccessful))
        setIsAuthenticated(loginSuccessful)
        setErrors(!loginSuccessful)

        if (loginSuccessful) {
            window.location.reload(false)
        }
    }
    const logout = async () => {
        await client.logout()
        await reset()
        window.location.reload(false)
    }

    const context = { isAuthenticated, login, logout, errors, reset }

    return <AuthenticationContext.Provider value={context} >
        {children}
    </AuthenticationContext.Provider>

}

function SecuredRoute({ children }) {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return isAuthenticated ? children : <Navigate to='/login' />

}

export { AuthenticationContext, SecuredApp, SecuredRoute }