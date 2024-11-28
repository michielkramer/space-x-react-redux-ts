import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SpaceXLaunches from './containers/SpaceXLaunches';

function App() {
    window.addEventListener('beforeunload', function() {
        console.log('beforeunload');
        window.localStorage.removeItem('persist:spaceX');
    });

    return (
        <BrowserRouter>
            <Routes>s
                <Route element={<SpaceXLaunches />} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;