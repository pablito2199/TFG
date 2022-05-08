import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import ReactFontLoader from 'react-font-loader'

import EditXml from './pages/EditXml'
import EditDog from './pages/EditDog'
import Search from './pages/Search'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './styles.css'
import { SideBar } from './components/SideBar'
import EditDogExceptional from './pages/EditDogExceptional';

ReactDOM.render(
    <BrowserRouter>
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Modak&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' />
        <div className='flex flex-row'>
            <SideBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/edit" element={<EditXml />} />
                <Route exact path="/edit/:id1/:id2/:id3/:id4/:id5" element={<EditDog />} />
                <Route exact path="/edit/:id1/:id2/:id3/:id4/:id5/:id6/:id7" element={<EditDogExceptional />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route exact path='/404' element={<NotFound />} />
                <Route path="*" element={<Navigate to='/404' replace />} />
            </Routes>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);