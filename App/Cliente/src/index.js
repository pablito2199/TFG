import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Edit from './pages/Edit.js';
import Search from './pages/Search.js';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/edit" element={<Edit />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/" element={<Edit />} />
        </Routes>
    </BrowserRouter >,
    document.getElementById('root')
);
