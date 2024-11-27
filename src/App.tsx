import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SpaceXLaunches from './containers/SpaceXLaunches';

function App() {
    return (
        <BrowserRouter>
            <Routes>s
                <Route element={<SpaceXLaunches />} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;