import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={reduxStore.store}>
        <PersistGate loading={<Loader />} persistor={reduxStore.persistor}>
            <App />
        </PersistGate>
    </Provider>
);
