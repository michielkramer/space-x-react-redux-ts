import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import AppContext from './context';
import SpaceXLaunches from './containers/SpaceXLaunches';

function App() {
    const [context, setContext] = useState({ isLoading: true });
    return (
        <AppContext.Provider value={[context, setContext]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SpaceXLaunches />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;