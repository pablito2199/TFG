import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"

import './styles.css'

import { SecuredApp, SecuredRoute } from './context'
import { SideBar } from './components/SideBar'
import Search from './pages/Search'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Save from './pages/Save'
import Login from './pages/Login'
import RegisterUsers from './pages/RegisterUsers'
import Edit from './pages/Edit'
import Preview from './pages/Preview'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SecuredApp>
                <div className='flex flex-row'>
                    <Routes>
                        <Route exact path="/" element={<SecuredRoute><Home /></SecuredRoute>} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/registerUsers" element={<SecuredRoute><RegisterUsers /></SecuredRoute>} />
                        <Route exact path="/home" element={<SecuredRoute><Home /></SecuredRoute>} />
                        <Route exact path="/search" element={<SecuredRoute><Search /></SecuredRoute>} />
                        <Route exact path="/edit/:id" element={<SecuredRoute><Edit /></SecuredRoute>} />
                        <Route exact path="/preview/:id" element={<SecuredRoute><Preview /></SecuredRoute>} />
                        <Route exact path="/save" element={<SecuredRoute><Save /></SecuredRoute>} />
                        <Route exact path="/404" element={<SecuredRoute><NotFound /></SecuredRoute>} />
                        <Route path="*" element={<Navigate to='/404' replace />} />
                    </Routes>
                    <SideBar />
                </div>
            </SecuredApp>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)