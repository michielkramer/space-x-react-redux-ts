import { createStore } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

function configureStore(): {
    persistor: Persistor;
    store: typeof store;
} {
    const config = {
        key: 'ah-space-x-react-ts',
        storage,
        whiteList: [
            'apiData'
        ]
    };

    const reducer = persistReducer(config, rootReducer);
    const store = createStore(
        reducer,composeWithDevTools()
    );

    const persistor = persistStore(store);

    return { persistor, store };
}

export default configureStore;
