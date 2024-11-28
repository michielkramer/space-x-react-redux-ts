import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

function configureStore() {
    const config = {
        key: 'spaceX',
        storage: sessionStorage,
        whiteList: ['appData']
    };

    const storeReducer = persistReducer(config, rootReducer);
    const store = createStore(
        storeReducer,
        composeWithDevTools()
    );
    const persistor = persistStore(store);
    return { persistor, store };
}

export default configureStore;
