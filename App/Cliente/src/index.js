import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Edit from './pages/Edit.js';
import Search from './pages/Search.js';

ReactDOM.render(
    <React.StrictMode>
        <Search />
    </React.StrictMode>,
    document.getElementById('root')
);
