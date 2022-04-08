import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ReactFontLoader from 'react-font-loader'

import Edit from './pages/Edit'
import Search from './pages/Search'

import './styles.css'

ReactDOM.render(
    <BrowserRouter>
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Modak&display=swap' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' />
        <Routes>
            <Route exact path="/edit" element={<Edit />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/" element={<Edit />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
