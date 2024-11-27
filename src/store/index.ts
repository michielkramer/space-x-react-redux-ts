import configureStore from './config';

export const configureDataStore = process.env.NODE_ENV === 'production' && configureStore;

const reduxStore = configureDataStore();

export type RootState = ReturnType<typeof reduxStore.store.getState>;
export type AppDispatch = typeof reduxStore.store.dispatch;

export default reduxStore;
