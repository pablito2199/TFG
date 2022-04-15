import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import ReactFontLoader from 'react-font-loader'

import Edit from './pages/Edit'
import Search from './pages/Search'
import Home from './pages/Home'
import NotFound from './pages/NotFound';

import './styles.css'

ReactDOM.render(
    <BrowserRouter>
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Modak&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/edit" element={<Edit />} />
            <Route path="/search" element={<Search />} />
            <Route exact path='/404' element={<NotFound />} />
            <Route path="*" element={<Navigate to='/404' replace />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
