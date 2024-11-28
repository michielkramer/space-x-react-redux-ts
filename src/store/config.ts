import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

function configureStore() {
    const config = {
        key: 'ah-space-x-react-ts',
        storage,
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
