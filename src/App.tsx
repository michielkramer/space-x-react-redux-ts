import React, { useContext, useEffect, useState } from 'react';
import Home from './containers/Home';
import Header from './components/Header';
import AppContext from './context';

function App() {
    const [context, setContext] = useState({ isLoading: true });
    return (
        <AppContext.Provider value={[context, setContext]}>
            <Header />
            <Home />
        </AppContext.Provider>
    );
}

export default App;