import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SpaceXLaunches from './containers/SpaceXLaunches';
import AppContext, { AppContextType } from './context';

function App() {
    const defaultAppValues: AppContextType = {
        isLoading: false,
        isShowingFavourites: false,
        missions: []
    };
    const [context, setContext] = useState(defaultAppValues);

    return (
        <AppContext.Provider value={[context, setContext]}>
            <BrowserRouter>
                <Routes>s
                    <Route element={<SpaceXLaunches />} path="/" />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;