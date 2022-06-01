import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import EditXml from './pages/EditXml'
import EditDog from './pages/EditDog'
import Search from './pages/Search'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './styles.css'
import { SideBar } from './components/SideBar'
import Save from './pages/Save';
import Login from './pages/Login';
import { SecuredApp, SecuredRoute } from './context';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SecuredApp>
                <div className='flex flex-row'>
                    <SideBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/save" element={<SecuredRoute><Save /></SecuredRoute>} />
                        <Route exact path="/edit/local/:id" element={<SecuredRoute><EditXml /></SecuredRoute>} />
                        <Route exact path="/edit/xunta/:id" element={<SecuredRoute><EditDog /></SecuredRoute>} />
                        <Route exact path="/home" element={<SecuredRoute><Home /></SecuredRoute>} />
                        <Route exact path="/search" element={<SecuredRoute><Search /></SecuredRoute>} />
                        <Route exact path="/404" element={<SecuredRoute><NotFound /></SecuredRoute>} />
                        <Route path="*" element={<Navigate to='/404' replace />} />
                    </Routes>
                </div>
            </SecuredApp>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);