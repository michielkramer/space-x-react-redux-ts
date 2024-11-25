import { createContext } from 'react';
import { ListItem } from '../components/List';

export type AppContextType = {
    isLoading: boolean;
    missions: ListItem[];
    isShowingFavourites: boolean;
};

const AppContext = createContext(null);

export default AppContext;